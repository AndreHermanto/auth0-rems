var request = require("request");
var config = require("../config/keys")

module.exports ={
  getRemsApplication: function(userID, applicationID){
    var options = { method: 'GET',
    url: `${config.rems}:${config.rems_port}/api/applications/${applicationID}`,
    headers: { 
      'x-rems-api-key': config.rems_api_key,
      'x-rems-user-id': userID
    }
  }

  return new Promise (function(resolve, reject){
    request(options, function (error, response, body) {
      if(error) return reject(error);
      try {
        resolve(body);
      }catch(e){
        reject(e);
      }
    }
  )});
  },
  getRemsAttachment: function(userID, attachmentId){
    var options = { method: 'GET',
    url: `${config.rems}:${config.rems_port}/api/applications/attachment/${attachmentId}`,
    encoding: 'binary',
    headers: { 
      'x-rems-api-key': config.rems_api_key,
      'x-rems-user-id': userID
    }
  }

  return new Promise (function(resolve, reject){
    request(options, function (error, response, body) {
      if(error) return reject(error);
      try {
        resolve(body);
      }catch(e){
        reject(e);
      }
    }
  )});
  }
} 