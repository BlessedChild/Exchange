module.exports = function() {
    return function(req, res, next) {
      console.log(" -------------------- ");
      if(req.user_name){
        console.log(new Date() + " 接收到用户：" + req.user_name + "发来的请求");
      }else if(req.ip){
        console.log(new Date() + " 接收到用户：" + req.ip + "发来的请求");
      }else{
        console.log(new Date() + " 接收到 <未知用户> 发来的请求");
      }

      next()
    }
  }