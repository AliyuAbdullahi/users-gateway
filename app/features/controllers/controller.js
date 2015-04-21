var request = require('request');
//var express = require('../../config/express');
var jwt = require('jsonwebtoken');

module.exports = {
  /* User initialised */
  userSignup :function(req, res,body) {
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
/* User login */
userLogin : function(req, res){
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
/* User signout */
userSignout: function(req, res) {
    jwt.verify(req.headers.auth, "TOPSECRETTTTT", function(err, payload) {
      if(err) {
        res.json({Error:"Uknown user cannot be signed out"});
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
/* delete user*/
userDelete: function(req, res) {
    jwt.verify(req.headers.auth, "TOPSECRETTTTT", function(err, payload) {
    if(err) {
            res.json({error: "Uknown user cannot be deleted"});
    }
    else {
            request.del({url: "http://localhost:4000/users/delete",
                  form: {
                    username: payload.username
                  }}, function(err, httpResponse, body) {
                     if(err) {
                      console.log(err);
                     }
                     else {
                         var data = JSON.parse(body);
                         res.json(data);                       
                     }
                  });
                }
              }); 
            },

//creating a new badge
createBadgeForUser :function(req, res) {
  
  jwt.verify(req.headers.auth, "TOPSECRETTTTT", function(err, payload) {
    if(err) {
            res.json({error: "No token Identity for warrior, no badge"});
    }
    else {
            request.post({url: "http://localhost:4000/users/delete",
                  form: {
                    username: req.body.username,
                    description: req.body.description,
                    author: payload.username
                  }}, function(err, httpResponse, body) {
                     if(err) {
                      console.log(err);
                     }
                     else {
                         var data = JSON.parse(body);
                         res.json(data);  
                     }
                  });
                }
              });
            },
          };