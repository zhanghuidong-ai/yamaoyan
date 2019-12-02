// 获取当前时间   年-月-日 时:分:秒
const md5 = require("md5");
const jwt = require("jwt-simple");
const KEY = "&^%&*";
module.exports.getNowTime = function () {
    const date = new Date();
    return date.getFullYear()+"-"
        + (date.getMonth()+1).toString().padStart(2,0) + "-"
        +date.getDate().toString().padStart(2,0) + " "
        +date.getHours().toString().padStart(2,0) + ":"
        +date.getMinutes().toString().padStart(2,0) + ":"
        +date.getSeconds().toString().padStart(2,0);
}
// res:响应对象
module.exports.json = function (res,ok = -1,msg = "网络连接错误") {
    res.json({
        ok,
        msg
    })
}
module.exports.Md5=function(password){
    const str="!@#$%";
    return md5(password+str)
}
module.exports.jwtencode=function(info){
        return jwt.encode({
            ...info,
            ...{
                lastTime:Date.now()+1000*60*60*2
            }
        },KEY)
}
module.exports.jwtdecode = function (token) {
    try{
        const info = jwt.decode(token,KEY);
        if(info.lastTime < Date.now()){
            return {
                ok:1,
                msg:"过期了"
            }
        }else{
            return {
                ok:3,
                msg:"正常",
                info
            }
        }
    }catch(err){
        return {
            ok:2,
            msg:"token异常"
        }
    }
}
// console.log(module.exports.getNowTime());