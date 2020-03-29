var nodemailer = require('nodemailer');
const template = require('./mail-template');

var transporter = nodemailer.createTransport({
  host: 'smtp.garvan.unsw.edu.au',
  port: 25,
  tls: { secureProtocol: "TLSv1_method" }
});

module.exports = {
    sendEmail: function(email, cohort, html, emailOnTemplate){
        var mailOptions = {
            from: 'REMS-NO-REPLY@garvan.org.au',
            to: email,
            subject: `Your Access to the ${cohort} Cohort is Revoked`,
            html: template[html](email, cohort, emailOnTemplate)
          };
          
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            }
        });
    },
    sendEmailWithAttachment: function(email, cohort, html, emailOnTemplate, path){
        var mailOptions = {
            from: 'REMS-NO-REPLY@garvan.org.au',
            to: email,
            subject: `Your Application to the ${cohort} Cohort is Successful`,
            html: template[html](email, cohort, emailOnTemplate),
            attachments: [{
                filename: 'rems_cohort_access.pdf',
                path: path,
                contentType: 'application/pdf'
            }]
          };
          
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            }
        });
    }
}