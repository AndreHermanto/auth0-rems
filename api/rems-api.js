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