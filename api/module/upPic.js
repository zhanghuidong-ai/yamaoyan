const fs=require("fs")  //删除用到
const formidable=require("formidable")//接收dataform格式数据
const path=require("path")    //绝对地址
const uploadDir = path.resolve(__dirname,"../upload");
module.exports.upPic=function(req,picName){
    const form=new formidable.IncomingForm()
    form.encoding = "utf-8";// 编码格式。
    form.uploadDir = uploadDir// 上传文件的地址
    form.keepExtensions = true;// 是否保留上传文件的扩展名
    return new Promise((resolve,reject)=>{
        form.parse(req,function(err,params,file){
            if(err) reject({ok:-1,msg:"网络连接错误"})
            else{
                const picInfo = file[picName];  //读取上传的文件
                if(!picInfo){
                    resolve({ok:2,msg:"请选择要上传图片",params})
                }
                else if(picInfo.size<=0){
                    fs.unlink(picInfo.path,function(err){
                        resolve({ok:2,msg:"请选择要上传图片",params})
                    })
                }else{
                    const styleArr=[".gif",".jpg",".png"]
                    const upExtname=path.extname(picInfo.path).toLowerCase()
                    if(!styleArr.includes(upExtname)){
                        fs.unlink(picInfo.path,function(err){
                            reject({ok:-1,msg:"请上传正确格式的图片：.gif,.png,.jpg",params})
                        })
                    }else{
                        if(params.oldshopPic){
							fs.unlink("upload/"+params.oldshopPic,function(err){
							})
                        }
                        params.newName=Date.now()+upExtname
                        fs.rename(picInfo.path,uploadDir+"/"+params.newName,function(err){
                            resolve({ok:1,msg:"上传成功",params})
                        })    
                    }
                }
            }
        })
    })
}