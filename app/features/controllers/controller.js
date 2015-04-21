var request = require('request');
//var express = require('../../config/express');
var jwt = require('jsonwebtoken');

module.exports = {
  warriorSignup :function(req, res,body) {
    request.post({url: 'http://localhost:4000/users/signup',
                  form: req.body}, 
                  function(err, httpResponse, body) {
                    if(err) {
                      console.log(err);
                    }
                    else {
                      console.log(body);
                      var data = JSON.parse(body);
                        res.json(data);
                    }
                  });
},

warriorLogin : function(req, res){
   request.post({url: 'http://localhost:4000/users/login',
                  form: req.body}, function(err, httpResponse, body) {
                    if(err) {
                      console.log(err);
                    }
                    else{
                        res.json(body);
                    }
                  }); 
},
warriorSignout : function(req, res) {
    jwt.verify(req.headers.auth, "TOPSECRETTTTT", function(err, payload) {
      if(err) {
        res.json({Error:"Uknown warrior cannot be taken out of battle"});
      }
      else {
          request.post({url: "http://localhost:4000/users/signout",
                  form: {username: payload.username}}, function(err, httpResponse, body) {
                    if(err) {
                      console.log(err);
                    }
                    else{
                      var data = JSON.parse(body);
                        res.json(data);
                    }
                }); 
      }
    });
},
};