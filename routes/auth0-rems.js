var express = require('express');
var router = express.Router();
var auth0api = require('../api/auth0-api');
var template = require('../public/javascripts/mail-template');
var cohortsMapping = require('../config/cohort-value-mapping');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'vectis.rems@gmail.com',
    pass: 'garvan2020'
  }
});

var sendEmail = function(email, cohort, html, emailOnTemplate){
	var mailOptions = {
		from: 'vectis.rems@gmail.com',
		to: email,
		subject: 'Vectis REMS notification',
		html: template[html](email, cohort, emailOnTemplate)
	  };
	  
	
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
		console.log(error);
		} else {
		console.log('Email sent: ' + info.response);
		}
	});
}


  

router.post('/remove-roles', function(req, res, next) {
  auth0api.getAccessToken().then(body => {
		const access_token = JSON.parse(body).access_token;
		const resource = req.body[0].resource;
		const user = req.body[0].user;
		const email = req.body[0].mail;

		sendEmail(email, cohortsMapping.cohorts[resource]['cohort'], 'getMailTemplateForRejectedApplicant', cohortsMapping.cohorts[resource]['email'])
		sendEmail(cohortsMapping.cohorts[resource]['email'], cohortsMapping.cohorts[resource]['cohort'], 'getMailTemplateForRejectedCommittee', email)

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
		const resource = req.body[0].resource;
		const user = req.body[0].user;
		const email = req.body[0].mail;

		sendEmail(email, cohortsMapping.cohorts[resource]['cohort'], 'getMailTemplateForApprovedApplicant', cohortsMapping.cohorts[resource]['email'])
		sendEmail(cohortsMapping.cohorts[resource]['email'], cohortsMapping.cohorts[resource]['cohort'], 'getMailTemplateForApprovedCommittee', email)

		auth0api.addUserToRoles(access_token, user, resource).then(x => {
			res.sendStatus(200);
		});

	})
});

module.exports = router;
