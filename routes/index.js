var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var endpoints = req.app.locals.routes;
  var endpointsString = "";

  endpoints.forEach(element => {
    endpointsString = endpointsString + JSON.stringify(element) + '\n\n'
  });

  res.render('index', { title: 'auth0-rems',
                        routes: endpointsString
        }
      );
});

module.exports = router;
