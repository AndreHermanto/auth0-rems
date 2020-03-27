var getGeneralTemplateApplicant = function(content, responsibleEmail){
    return `<html>
    <head>
      <style type="text/css">
        .ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td,img{line-height:100%}#outlook a{padding:0}.ExternalClass,.ReadMsgBody{width:100%}a,blockquote,body,li,p,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{mso-table-lspace:0;mso-table-rspace:0}img{-ms-interpolation-mode:bicubic;border:0;height:auto;outline:0;text-decoration:none}table{border-collapse:collapse!important}#bodyCell,#bodyTable,body{height:100%!important;margin:0;padding:0;font-family:ProximaNova,sans-serif}#bodyCell{padding:20px}#bodyTable{width:600px}@font-face{font-family:ProximaNova;src:url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-regular-webfont-webfont.eot);src:url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-regular-webfont-webfont.eot?#iefix) format('embedded-opentype'),url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-regular-webfont-webfont.woff) format('woff');font-weight:400;font-style:normal}@font-face{font-family:ProximaNova;src:url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-semibold-webfont-webfont.eot);src:url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-semibold-webfont-webfont.eot?#iefix) format('embedded-opentype'),url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-semibold-webfont-webfont.woff) format('woff');font-weight:600;font-style:normal}@media only screen and (max-width:480px){#bodyTable,body{width:100%!important}a,blockquote,body,li,p,table,td{-webkit-text-size-adjust:none!important}body{min-width:100%!important}#bodyTable{max-width:600px!important}#signIn{max-width:280px!important}}
      </style>
    </head>
    <body>
      <center>
        <table style="width: 600px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin: 0;padding: 0;font-family: &quot;ProximaNova&quot;, sans-serif;border-collapse: collapse !important;height: 100% !important;" align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
          <tr>
            <td align="center" valign="top" id="bodyCell" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin: 0;padding: 20px;font-family: &quot;ProximaNova&quot;, sans-serif;height: 100% !important;">
            <div class="main">
              ${content}
  
              <strong>Garvan REMS</strong>
  
              <br><br>
              <hr style="border: 2px solid #EAEEF3; border-bottom: 0; margin: 20px 0;">
              <p style="text-align: center;color: #A9B3BC;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;">
                If you have any further questions or concerns, please contact us by replying to ${responsibleEmail}.
              </p>
              <p style="font-weight:bold;text-align: center;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;">
                Please do not reply to this email as we are unable to respond
              </p>
            </div>
            </td>
          </tr>
        </table>
      </center>
    </body>
  </html>`
}

var getGeneralTemplateCommittee = function(content){
    return `<html>
    <head>
      <style type="text/css">
        .ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td,img{line-height:100%}#outlook a{padding:0}.ExternalClass,.ReadMsgBody{width:100%}a,blockquote,body,li,p,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{mso-table-lspace:0;mso-table-rspace:0}img{-ms-interpolation-mode:bicubic;border:0;height:auto;outline:0;text-decoration:none}table{border-collapse:collapse!important}#bodyCell,#bodyTable,body{height:100%!important;margin:0;padding:0;font-family:ProximaNova,sans-serif}#bodyCell{padding:20px}#bodyTable{width:600px}@font-face{font-family:ProximaNova;src:url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-regular-webfont-webfont.eot);src:url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-regular-webfont-webfont.eot?#iefix) format('embedded-opentype'),url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-regular-webfont-webfont.woff) format('woff');font-weight:400;font-style:normal}@font-face{font-family:ProximaNova;src:url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-semibold-webfont-webfont.eot);src:url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-semibold-webfont-webfont.eot?#iefix) format('embedded-opentype'),url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-semibold-webfont-webfont.woff) format('woff');font-weight:600;font-style:normal}@media only screen and (max-width:480px){#bodyTable,body{width:100%!important}a,blockquote,body,li,p,table,td{-webkit-text-size-adjust:none!important}body{min-width:100%!important}#bodyTable{max-width:600px!important}#signIn{max-width:280px!important}}
      </style>
    </head>
    <body>
      <center>
        <table style="width: 600px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin: 0;padding: 0;font-family: &quot;ProximaNova&quot;, sans-serif;border-collapse: collapse !important;height: 100% !important;" align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
          <tr>
            <td align="center" valign="top" id="bodyCell" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin: 0;padding: 20px;font-family: &quot;ProximaNova&quot;, sans-serif;height: 100% !important;">
            <div class="main">
              ${content}
  
              <strong>Garvan REMS</strong>
  
              <br><br>
              <hr style="border: 2px solid #EAEEF3; border-bottom: 0; margin: 20px 0;">
              <p style="font-weight:bold;text-align: center;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;">
                Please do not reply to this email as we are unable to respond
              </p>
            </div>
            </td>
          </tr>
        </table>
      </center>
    </body>
  </html>`
}

module.exports = {
    getMailTemplateForApprovedApplicant: function(applicantEmail, cohort, committeeEmail){
        return getGeneralTemplateApplicant(`
        <h2>Your application request has been granted</h2>
  
        <p>${applicantEmail} now have access to ${cohort}</p>`, committeeEmail)
    },
    getMailTemplateForRejectedApplicant: function(applicantEmail, cohort, committeeEmail){
        return getGeneralTemplateApplicant(`
        <h2>Your application request has been denied</h2>
  
        <p>${applicantEmail} failed to have access to ${cohort}</p>`, committeeEmail)
    },
    getMailTemplateForApprovedCommittee: function(committeeEmail, cohort, applicantEmail){
        return getGeneralTemplateCommittee(`
        <h2>A new user has been granted access to your cohort</h2>
  
        <p>${applicantEmail} has now been granted access to ${cohort}</p>`)
    },
    getMailTemplateForRejectedCommittee: function(committeeEmail, cohort, applicantEmail){
        return getGeneralTemplateCommittee(`
        <h2>A user has been denied to access your cohort</h2>
  
        <p>${applicantEmail} has been denied to access ${cohort}</p>`)
    },
}