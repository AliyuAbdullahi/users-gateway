var controllerData = require('../controllers/controller');
module.exports = function(app) {
  app.route('/users/signup').post(controllerData.userSignup);
  app.route('/users/allusers').get(controllerData.getAllUsers);
  app.route('/users/login').post(controllerData.userLogin);
  //app.route('/users/:username').get(controllerData.getUserByName);
  app.route('/users/signout').post(controllerData.userSignout);
  app.route('/users/oneuser').post(controllerData.getOneUser);
  app.route('/users/delete').delete(controllerData.userDelete);
  app.route('/user/update').put(controllerData.modifyUserDetails);
  // app.route('users/delete').delete(controllerData.UserDelete);
  app.route('/users/createBadge').post(controllerData.createBadgeForUser);
  app.route('/users/update').put(controllerData.modifyUserDetails);
};  