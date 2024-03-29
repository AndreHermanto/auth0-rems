// The MIT License

// Copyright (c) 2021 Garvan, Andre Hermanto

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

const express = require('express');
const router = express.Router();
const auth0api = require('../api/auth0-api');
const remsapi = require('../api/rems-api');
const mail = require('../public/javascripts/send-mail');
const cohortsMapping = require('../config/cohort-value-mapping');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const moment = require('moment');
const HummusRecipe = require('hummus-recipe');


router.post('/remove-roles', function(req, res, next) {
  auth0api.getAccessToken().then(body => {
		const access_token = JSON.parse(body).access_token;
		const applicationId = req.body[0].application;
		const resource = req.body[0].resource.split(']')[1];
		const user = req.body[0].user;
		const email = req.body[0].mail;

		mail.sendEmail(email, cohortsMapping.cohorts[resource]['cohort'], 'getMailTemplateForRejectedApplicant', cohortsMapping.cohorts[resource]['email'])
		mail.sendEmail(cohortsMapping.cohorts[resource]['email'], cohortsMapping.cohorts[resource]['cohort'], 'getMailTemplateForRejectedCommittee', email)

		auth0api.removeUserFromRoles(access_token, user, resource).then(x => {
			res.sendStatus(200);
		});
	})
  
});

router.get('/', function(req, res, next) {
	auth0api.getAccessToken().then(body => {
		const access_token = JSON.parse(body).access_token;
		auth0api.getRoles(access_token).then(roles => {
			  res.send(roles)
		  })
	  })
	
});

router.post('/add-roles', function(req, res, next) {
  auth0api.getAccessToken().then(body => {
		const access_token = JSON.parse(body).access_token;
		const applicationId = req.body[0].application;
		const resource = req.body[0].resource.split(']')[1];
		const user = req.body[0].user;
		const email = req.body[0].mail;

		remsapi.getRemsApplication(user, applicationId).then(app => {
			let jsonApp = JSON.parse(app);
			let attachmentId = jsonApp['application/attachments'][0]['attachment/id'];
			remsapi.getRemsAttachment(user, attachmentId).then(attachment => {
				const stamp = new PDFDocument;

				const writeStream = fs.createWriteStream('output.pdf')
				fs.writeFile('doc.pdf', attachment, 'binary',(err) => {
					if (err) throw err;
					console.log('The file has been saved!');
				  });

				stamp.pipe(writeStream);
				stamp.image('approved_stamp.png', 150, 200, {width: 350});
				stamp.fontSize(12);
				stamp.fillColor('#66cc99').text(cohortsMapping.cohorts[resource]['cohort'] + " Data Access Comittee", 235, 255)
				stamp.fillColor('#66cc99').text("has approved this application", 250, 275)
				stamp.fillColor('#66cc99').text("on " + moment(new Date()).format("ll"), 275, 390)
				stamp.end();
		
				writeStream.on('finish', function () {
					const pdfDoc = new HummusRecipe('./doc.pdf', 'finalDoc.pdf');

					let pageNo = 1;
					while(pageNo <= pdfDoc.metadata.pages){
						pdfDoc.editPage(pageNo)
						.overlay('./output.pdf')
						.endPage()
			
						pageNo++;
					}
			
					pdfDoc.endPDF(() => {
						mail.sendEmailWithAttachment(email, cohortsMapping.cohorts[resource]['cohort'], 'getMailTemplateForApprovedApplicant', cohortsMapping.cohorts[resource]['email'], './finalDoc.pdf')
						mail.sendEmailWithAttachment(cohortsMapping.cohorts[resource]['email'], cohortsMapping.cohorts[resource]['cohort'], 'getMailTemplateForApprovedCommittee', email, './finalDoc.pdf')
					})
				});
			})
		})

		auth0api.addUserToRoles(access_token, user, resource).then(x => {
			res.sendStatus(200);
		});

	})
});

module.exports = router;
