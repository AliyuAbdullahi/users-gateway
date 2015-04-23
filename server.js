var config = require('./config/config')();
var app = require('./config/express')();
app.listen(4000);
// app.use('/',function (req,res){
//   res.send("GateWay to user's Destiny");
// });
module.exports = app;
