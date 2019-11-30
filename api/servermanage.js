const express = require("express");
const bodyParser = require('body-parser');
const db = require("./module/db");
const tools = require("./module/tools");
const {upPic}=require("./module/upPic")
const mongodb=require("mongodb")
const app = express();
app.use(express.static(__dirname+"/upload"))
app.use(bodyParser.json());
// 登陆
app.post("/login",async function (req,res) {
    const {name,password} = req.body;
    // 根据账号和密码进行登陆，需要与你的数据库当中的文档进行匹配
    const results = await db.findOne("ele","login",{
        name,
        password:tools.Md5(password)
    })
    if(results){
        await db.insertOne("ele","loginList",{
            adminId:results._id,
            name:results.name,
            loginTime:Date.now()
        })
        res.json({
            ok:1,
            name:results.name,
            token:tools.jwtencode({
                name:results.name
            })
        })
    }else{
        res.json({
            ok:-1,
            msg:"账号或密码有误"
        })
    }
});
app.get("/adminLog",async function (req,res) {
    const deResult = tools.jwtdecode(req.headers.authorization);
    if(deResult.ok === 3){
        const name = deResult.info.name;
        let pageIndex = req.query.pageIndex/1;
    let pageSum = 1;
    let limit = 3;
    const count = await db.count("ele","loginList",{
        name
    });
    pageSum = Math.ceil(count/limit);
    if(pageSum < 1)
        pageSum = 1;
    if(pageIndex > pageSum)
        pageIndex = pageSum;
    if(pageIndex < 1)
        pageIndex = 1;
    const adminLog = await db.findall("ele","loginList",{
        sortObj:{
            loginTime:-1
        },
        skip:(pageIndex-1)*limit,
        limit,
        whereObj:{
            name
        }
    });
    res.json({
        ok:1,
        adminLog,
        pageIndex,
        pageSum
    })
    }else{
        res.json({
            ok:-1,
            mag:"无效的请求"
        })
    }
})
app.put("/putPassWord",async function(req,res){
    const deResult = tools.jwtdecode(req.headers.authorization);
    if(deResult.ok === 3){
        let {pass,_id,newPass}=req.body.passwordinfo
        pass=tools.Md5(pass),
        newPass=tools.Md5(newPass)
        const $set = {
            password:newPass
        }
       const resule=await db.findOneById("ele","login",_id)
       if(pass===resule.password){
           await db.updateOneById("ele","login",_id,{$set})
           res.json({
               ok:1,
               name:resule.name,
               mag:"修改成功"
           })
       }else{
           res.json({
               ok:-2,
               mag:"原密码不正确"
           })
       }
    }else{
        res.json({
            ok:-1,
            mag:"无效的请求"
        })
    }
})
app.get("/adminList",async function (req,res) {
    const deResult = tools.jwtdecode(req.headers.authorization);
    if(deResult.ok === 3){
        let pageIndex = req.query.pageIndex/1;
    let pageSum = 1;
    let limit = 3;
    const count = await db.count("ele","login");
    pageSum = Math.ceil(count/limit);
    if(pageSum < 1)
        pageSum = 1;
    if(pageIndex > pageSum)
        pageIndex = pageSum;
    if(pageIndex < 1)
        pageIndex = 1;
    const adminList = await db.findall("ele","login",{
        sortObj:{
            loginTime:-1
        },
        skip:(pageIndex-1)*limit,
        limit,
    });
    res.json({
        ok:1,
        adminList,
        pageIndex,
        pageSum
    })
    }else{
        res.json({
            ok:-1,
            mag:"无效的请求"
        })
    }
})
app.post("/shopType",async function (req,res) {
    const {ok,params} = await upPic(req,"shopTypePic");
    if(ok === 1){
        await db.insertOne("ele","shopTypeList",{
            shopTypeName:params.shopTypeName,
            shopTypePic:params.newName,
            createTime:Date.now()
        })
        res.json({
            ok:1,
            msg:"插入成功"
        })
    }else{
        res.json({
            ok:-1,
            msg:"上传失败，请查看网络"
        })
    }
});
app.post("/shopList",async function (req,res) {
    const {ok,params} = await upPic(req,"shopPic");
    const shopType = await db.findOneById("ele","shopTypeList",params.shopTypeId);
    if(ok === 1){
        await db.insertOne("ele","shopList",{
            isTop:params.isTop === "true",
            shopTypeName:shopType.shopTypeName,
            shopTypeId:shopType._id,
            shopName:params.shopName,
            shopPic:params.newName,
            createTime:Date.now()
        })
        res.json({
            ok:1,
            msg:"插入成功"
        })
    }else{
        res.json({
            ok:-1,
            msg:"上传失败，请查看网络"
        })
    }
});
app.put("/shopTypeList",async function(req,res){
    const {ok,params} = await upPic(req,"shopPic");
    const shopType = await db.findOneById("ele","shopTypeList",params.shopTypeId);
    if(ok !== -1){
        let $set={
            shopTypeName:shopType.shopTypeName,
            shopTypeId:mongodb.ObjectId(params.shopTypeId) ,
            isTop:params.isTop==="true",
            createTime:Date.now(),
            shopName:params.shopName,
        };
        if(params.newName){
            $set.shopPic=params.newName
        }
        await db.updateOneById("ele","shopList",params.shopId,{$set})
        res.json({
            ok:1,
            msg:"修改成功"
        })
    }else{
        res.json({
            ok:-1,
            msg:"修改失败，请查看网络"
        })
    }
})
app.get("/allshopType",async function(req,res){
    const deResult = tools.jwtdecode(req.headers.authorization);
    if(deResult.ok === 3){
    const shopTypeList = await  db.findall("ele","shopTypeList",{
            sortObj:{
                createTime:-1
            }
        })
        res.json({
            ok:1,
            shopTypeList
        })
    }else{
        res.json({
            ok:-1,
            mag:"无效的请求"
        })
    }
})
app.get("/shopTypeList",async function (req,res) {
    const deResult = tools.jwtdecode(req.headers.authorization);
    if(deResult.ok === 3){
        let pageIndex = req.query.pageIndex/1;
        let pageSum = 1;
        let limit = 2;
        let whereObj={}
        if(req.query.searchInfo) whereObj.shopTypeName=new  RegExp(req.query.searchInfo)
        const count = await db.count("ele","shopTypeList",whereObj);
        pageSum = Math.ceil(count/limit);
        if(pageSum < 1)
            pageSum = 1;
        if(pageIndex > pageSum)
            pageIndex = pageSum;
        if(pageIndex < 1)
            pageIndex = 1;
        const shopTypeList = await db.findall("ele","shopTypeList",{
            whereObj,
            sortObj:{
                createTime:-1
            },
            skip:(pageIndex-1)*limit,
            limit
        });
        res.json({
            ok:1,
            shopTypeList,
            pageIndex,
            pageSum
        })
    }else{
        res.json({
            ok:-1,
            mag:"无效的请求"
        })
    }
})
app.get("/shopList",async function (req,res) {
    const deResult = tools.jwtdecode(req.headers.authorization);
    if(deResult.ok === 3){
        let whereObj={}
        if(req.query.searchInfo) whereObj.shopTypeId = mongodb.ObjectId(req.query.searchInfo);
        let pageIndex = req.query.pageIndex/1;
    let pageSum = 1;
    let limit = 2;
    const count = await db.count("ele","shopList",whereObj);
    pageSum = Math.ceil(count/limit);
    if(pageSum < 1)
        pageSum = 1;
    if(pageIndex > pageSum)
        pageIndex = pageSum;
    if(pageIndex < 1)
        pageIndex = 1;
    const shopList = await db.findall("ele","shopList",{
        whereObj,
        sortObj:{
            createTime:-1
        },
        skip:(pageIndex-1)*limit,
        limit
    });
    res.json({
        ok:1,
        shopList,
        pageIndex,
        pageSum
    })
    }else{
        res.json({
            ok:-1,
            mag:"无效的请求"
        })
    } 
})
app.get("/getshopById",async function(req,res){
    const deResult = tools.jwtdecode(req.headers.authorization);
    if(deResult.ok === 3){
        const getshopById=await db.findOneById("ele","shopList",req.query.id)
        if(getshopById) 
            res.json({
                ok:1,
                getshopById
            })
    }else{
        res.json({
            ok:-1,
            mag:"无效的请求"
        })
    }
})
app.get("/getshopListById/:id",async function(req,res){
    const deResult = tools.jwtdecode(req.headers.authorization);
    if(deResult.ok === 3){
        const whereObj={shopTypeId:mongodb.ObjectID(req.params.id)}
        const getshopById=await db.findall("ele","shopList",{whereObj})
        if(getshopById) 
            res.json({
                ok:1,
                getshopById
            })
    }else{
        res.json({
            ok:-1,
            mag:"无效的请求"
        })
    }
})
app.get("/getgoodsListById/:id",async function(req,res){
    const deResult = tools.jwtdecode(req.headers.authorization);
    if(deResult.ok === 3){
        const whereObj={shopId:mongodb.ObjectID(req.params.id)}
        const getgoodsById=await db.findall("ele","goodsTypeList",{whereObj})
        if(getgoodsById) 
            res.json({
                ok:1,
                getgoodsById
            })
    }else{
        res.json({
            ok:-1,
            mag:"无效的请求"
        })
    }
})
app.post("/addGoodsType",async function(req,res){
    const deResult = tools.jwtdecode(req.headers.authorization);
    if(deResult.ok === 3){
        const resule=await db.findOneById("ele","shopList",req.body.shopId)
        if(resule) {
            const data=await db.insertOne("ele","goodsTypeList",{
                shopName:resule.shopName,
                shopTypeName:resule.shopTypeName,
                shopId:resule._id ,
                shopTypeId:resule.shopTypeId,
                goodsTypeName:req.body.goodsTypeName,
                isTop:req.body.isTop,
                createTime:Date.now()
            })
            if(data) 
            res.json({
                ok:1,
                msg:"插入成功"
            })
        }
    }else{
        res.json({
            ok:-1,
            mag:"无效的请求"
        })
    }
})
app.get("/getGoodsType",async function(req,res){
    const deResult = tools.jwtdecode(req.headers.authorization);
    if(deResult.ok === 3){
        let whereObj={}
        if(req.query.searchInfo) whereObj.shopId = mongodb.ObjectId(req.query.searchInfo);
        let pageIndex = req.query.pageIndex/1;
    let pageSum = 1;
    let limit =3;
    const count = await db.count("ele","goodsTypeList",whereObj);
    pageSum = Math.ceil(count/limit);
    if(pageSum < 1)
        pageSum = 1;
    if(pageIndex > pageSum)
        pageIndex = pageSum;
    if(pageIndex < 1)
        pageIndex = 1;
    const goodsTypeList = await db.findall("ele","goodsTypeList",{
        whereObj,
        sortObj:{
            createTime:-1
        },
        skip:(pageIndex-1)*limit,
        limit
    });
    res.json({
        ok:1,
        goodsTypeList,
        pageIndex,
        pageSum
    })
    }else{
        res.json({
            ok:-1,
            mag:"无效的请求"
        })
    } 
})
app.listen(80,function () {
    console.log("success");
})