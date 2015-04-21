var config = require('./config/env/config')();
var app = require('./config/express')();
app.listen(config.port, function () {
    console.log('Express Servicce  app listening on port: ' + config.port);
});
// app.use('/',function (req,res){
//   res.send("GateWay to user's Destiny");
// });
module.exports = app;
