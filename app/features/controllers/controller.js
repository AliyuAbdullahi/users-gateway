var request = require('request');
var jwt = require('jsonwebtoken');
var config = require('../../../config/env/config')();
module.exports = {
    /* User initialised */
userSignup: function(req, res, body) {
  request.post({
    url:config.development.url.userService+"/users/signup",
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
  url: config.development.url.userService+"/users/login",
      form: req.body
      }, function(err, httpResponse, body) {
        if (err) {
          console.log(err);
        } 
        else {
              res.json(body);
              }
           });
         },
    /* User signout */
userSignout: function(req, res) {
request.post({
  url: config.development.url.userService+"/users/signout",
      form: req.body
      }, function(err, httpResponse, body) {
        if (err) {
          console.log(err);
        } 
        else {
              res.json(body);
              }
           });
  // request.post({
  // url: config.development.url.userService+"users/verify",
  //     form: {
  //     auth: req.body.auth
  //     }
  // }, function(error, httpResponse, body) {
  //     if (error) {
  //       res.json(error);
  //       } 
  //       else {
  //           request.post({
  //           url: config.development.url.userService+"/users/signout",
  //           form: {
  //           username: body.username
  //           }
  //         }, function(err, httpResponse, body) {
  //           if (err) {
  //           console.log(err);
  //           } 
  //           else {
  //           var data = JSON.parse(body);
  //           res.json(data);
  //           }
  //         });
  //       }
  //     });
    },
getOneUser:function(req, res) {
  request.post({
    url: config.development.url.userService+"/users/username",
    form:{
      username: req.body.username
    }
  },function(err, httpResponse, body) {
      if (err) {
        console.log(err);
        }   else {
            var data = JSON.parse(body);
          res.json(data);
          }
        });
      },
getAllUsers: function(req, res) {
  request.get({
    url: config.development.url.userService+"/users/signup"
  },
     function(err, httpResponse, body) {
      if (err) {
        console.log(err);
        }   else {
            var data = JSON.parse(body);
          res.json(data);
          }
        });
      },

modifyUserDetails: function(req, res) {
  request.post({
    url: config.development.url.userService+"/users/verify",
    form: {
      auth: req.body.auth
    }
    }, function(error, httpResponse, body) {
        if (error) {
          res.json(error);
        } 
        else {
        req.body.oldname = body.username;
        request.put({
        url: config.development.url.userService+"/users/edit",
        form: {"req.body.oldname":body.username}
        }, function(err, httpResponse, body) {
          if (err) {
              console.log(err);
          } 
            else {
            var data = JSON.parse(body);
            if (body.error) {
            res.json({
              error: "Sorry data doesn't match "
            });
            } 
              else {
                res.json({
                Success: "user detail updated"
                });
              }
            }
          });
        }
      });
    },
  /* delete user*/
userDelete: function(req, res) {
  request.post({
    url: config.development.url.userService+'/users/verify',
      form: {
      auth: req.body.auth
      }
  }, function(error, httpResponse, body) {
      if (error) {
        res.json(error);
      } else {
        request.del({
        url: config.development.url.userService+'/users/delete',
        form: {
          username: body.username
        }
      }, function(err, httpResponse, body) {
         if (err) {
            console.log(err);
         } else {
                request.del({
                url: config.development.url.badgeService+'/users/delete',
                form: {
                badge: req.body.badge_title,
                badge_type: req.body.badge_type,
                total: req.body.total
                  }
                }, function(err, httpResponse, body) {
                      if (err) {
                        console.log(err);
                      } else {
                        res.json({
                          Success: "User badge and account deleted"
                        });
                      }
                    });
                  }
                });
              }
            });
          },

          //creating a new badge
createBadgeForUser: function(req, res) {
  request.post({
    url: config.development.url.userService+'/users/verify',
    form: {
      auth: req.body.auth
    }
  }, function(error, httpResponse, body) {
      if (error) {
        res.json(error);
      } else {
              console.log(body);
              request.post({
              url: config.development.url.badgeService+'/users/',
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
