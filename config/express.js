var express = require('express'),
    morgan = require('morgan'),
     routes = require('../app/features/routes/index.server.route'),
    bodyParser = require('body-parser');
    var router = express.Router();
module.exports = function() {
    var app = express();
  

  if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
    extended: false
    }));
    app.use('/', router);

    routes(router);
   
  //routes = require('../app/features/routes/userServiceRoute');
  //routes(router);
    return app;
};