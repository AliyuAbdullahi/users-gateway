var controllerData = require('../controllers/controller');
module.exports = function(app) {
  app.route('/users/signup').post(controllerData.warriorSignup);
  app.route('/users/login').post(controllerData.warriorLogin);
  // app.route('/users/:username').get(controllerData.getUserByName);
  // app.route('/users/signout').post(controllerData.Usersignout);
  // app.route('/users/edit').put(controllerData.updateOneUser);
  // app.route('/users/delete').delete(controllerData.UserDelete);
  // app.route('users/delete').delete(controllerData.UserDelete);
};  