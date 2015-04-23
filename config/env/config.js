module.exports=function(){
  return{
     port: process.env.PORT || 5000,
     development:{
                  url:{
                    userService:"http://localhost:4000",
                    badgeService:"http://localhost:5555"
                  }
     },
     production:{
                  url:{
                    userService:"",
                    badgeService:""
                  }
     }
  }
}