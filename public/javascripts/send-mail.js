var nodemailer = require('nodemailer');
const template = require('./mail-template');

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

module.exports = {
    sendEmail: function(email, cohort, html, emailOnTemplate){
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
    },
    sendEmailWithAttachment: function(email, cohort, html, emailOnTemplate, path){
        var mailOptions = {
            from: 'vectis.rems@gmail.com',
            to: email,
            subject: 'Vectis REMS notification',
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