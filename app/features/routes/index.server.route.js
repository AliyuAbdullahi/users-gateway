var controllerData = require('../controllers/controller');
module.exports = function(app) {
  app.route('/users/signup').post(controllerData.userSignup);
  app.route('/users/login').post(controllerData.userLogin);
  //app.route('/users/:username').get(controllerData.getUserByName);
  app.route('/users/signout').post(controllerData.userSignout);
  // app.route('/users/edit').put(controllerData.updateOneUser);
  app.route('/users/delete').delete(controllerData.userDelete);
  // app.route('users/delete').delete(controllerData.UserDelete);
};  