var request = require('request');
var jwt = require('jsonwebtoken');
var config = require('../../../config/env/config')();
module.exports = {
  /* User initialised */
userSignup: function(req, res, body) {
    request.post({
      url: config.production.url.userService + "/users/signup",
         form: req.body
      },
      function(err, httpResponse, body) {
         if (err) {
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
userLogin: function(req, res) {
    request.post({
      url: config.production.url.userService + "/users/login",
      form: req.body
    }, function(err, httpResponse, body) {
      if (err) {
        console.log(err);
      } else {
        res.json(body);
      }
    });
  },
  /* User signout */
userSignout: function(req, res) {
    request.post({
      url: config.production.url.userService + "/users/signout",
      form: req.body
    }, function(err, httpResponse, body) {
      if (err) {
        console.log(err);
      } else {
        res.json(body);
      }
    });
  },
  /*Obtain one user*/
getOneUser: function(req, res) {
    request.post({
      url: config.production.url.userService + "/users/username",
      form: {
      username: req.body.username
      }
    }, function(err, httpResponse, body) {
      if (err) {
        console.log(err);
      } else {
        var data = JSON.parse(body);
        res.json(data);
      }
    });
  },
  /*Get all users*/
getAllUsers: function(req, res) {
    request.get({
        url: config.production.url.userService + "/users/signup"
      },
      function(err, httpResponse, body) {
        if (err) {
          console.log(err);
        } else {
          var data = JSON.parse(body);
          res.json(data);
        }
      });
  },
  /*Update user*/
setuser: function(req, res) {
    request.post({
        url: config.production.url.userService + "/users/verify",
        form: {
          auth: req.body.auth
        }
      },
      function(error, httpResponse, body) {
        if (error) {
          res.json(error);
        } else {
          request.put({
            url: config.production.url.userService + "/users/edit",
            form: {
              oldname: req.body.oldname,
              username: req.body.username
            }
          }, function(err, httpResponse, body) {
            if (err) {
              console.log(err);
            } else {
              var data = JSON.parse(body);
                if (body.error) {
                res.json({
                  error: "Sorry data doesn't match "
                });
              } else {
                res.json({
                  Success: "user detail updated"
                });
              }
            }
          });
        }
      });
  },
getAllBadges:function(req,res){ 
    request.get({
      url: config.development.url.badgeService + "/users/",
    }, function(err, httpResponse, body) {
      if (err) {
        console.log(err);
      } else {
        var data = JSON.parse(body);
        res.json(data);
      }
    });
  },
/*dummie function*/
modifyUserDetails: function(req, res) {
    request.post({
      url: config.production.url.userService + "/users/verify",
      form: {
      auth: req.body.auth
      }
    }, function(error, httpResponse, body) {
      if (error) {
        res.json(error);
      } else {
        req.body.oldname = body.username;
        request.put({
          url: config.production.url.userService + "/users/edit",
          form: {
            "req.body.oldname": body.username
          }
        }, function(err, httpResponse, body) {
          if (err) {
            console.log(err);
          } else {
            var data = JSON.parse(body);
            if (body.error) {
              res.json({
                error: "Sorry data doesn't match "
              });
            } else {
              res.json({
                Success: "user detail updated"
              });
            }
          }
        });
      }
    });
  },
/*Delete User*/
userDelete: function(req, res) {
    request.post({
        url: config.production.url.userService + "/users/verify",
        form: {
          auth: req.body.auth
        }
      },
      function(error, httpResponse, body) {
        if (error) {
          res.json(error);
        } else {

          request.del({
              url: config.production.url.userService + "/users/delete",
              form: {
                username: req.body.username
              }
            },
            function(err, httpResponse, body) {
              if (err) {
                console.log(err);
              } else {
                console.log(body);
                res.json(body);
              }
          });
         }
      });
     },
  //creating a new badge
createBadgeForUser: function(req, res) {
    request.post({
      url: config.production.url.userService + "/users/verify",
      form: {
        auth: req.body.auth
      }
    }, function(error, httpResponse, body) {
      if (error) {
        res.json(error);
      } else {
        console.log(body);
        request.post({
          url: config.production.url.badgeService + '/users/',
          form: {
            badge_title: req.body.badge_title,
            badge_type: req.body.badge_type,
            total: req.body.total
          }
        }, function(err, httpResponse, body) {
          if (err) {
            console.log(err);
          } else {
            var data = JSON.parse(body);
            res.json(data);
          }
        });
      }
    });
  },
};
