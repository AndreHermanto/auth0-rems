var express = require('express');
var router = express.Router();
var auth0api = require('../api/auth0-api');

router.post('/remove-roles', function(req, res, next) {
  auth0api.getAccessToken().then(body => {
		const access_token = JSON.parse(body).access_token;
		const resource = req.body[0].resource;
		const user = req.body[0].user;
		const email = req.body[0].email;

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

		auth0api.addUserToRoles(access_token, user, resource).then(x => {
			res.sendStatus(200);
		});

	})
});

module.exports = router;
