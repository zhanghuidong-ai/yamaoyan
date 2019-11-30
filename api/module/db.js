const mongoClient=require("mongodb").MongoClient
const mongodb=require("mongodb")
 function _connect(dbone) {
    return new Promise((resolve, reject) => {
        mongoClient.connect("mongodb://127.0.0.1:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function (err, client) {
            if (err) reject(err)
            else {
                const db = client.db(dbone)
                resolve(db)
            }
        })
    })
}
module.exports.count=async function(dbone,collName,whereObj={}){
    const db=await _connect(dbone)
    return new Promise((resolve,reject)=>{
        db.collection(collName).countDocuments(whereObj).then(count=>{
            resolve(count)
        })
    })
}
module.exports.findall=async function(dbone,collName,{whereObj={},limit=0,skip=0,sortObj={}}){
    const db=await _connect(dbone)
    return new Promise((resolve, reject)=>{
        db.collection(collName).find(whereObj).limit(limit).skip(skip).sort(sortObj).toArray(function (err,results) {
            if(err) reject(err)
            else{
                resolve(results)
            }
        })
    })
}
module.exports.findOne=async function(dbone,collName,whereObj={}){
    const db = await _connect(dbone);
    return new Promise((resolve,reject)=>{
        db.collection(collName).findOne(whereObj,function (err,results) {
            if(err)
                reject(err);
            else
                resolve(results);
        })
    })
}
module.exports.insertOne=async function(dbone,collName,insertObj){
    const db=await _connect(dbone)
    return new Promise((resolve, reject)=>{
        db.collection(collName).insertOne(insertObj,function(err,results){
            if(err) reject(err)
            else{
                resolve(results)
            }
        })
    })
}
module.exports.dataPage=async function(dbone,collName,pageIndex,obj){
    obj = obj || {};
    const {whereObj={},limit=0,sortObj={}} = obj
    const count = await this.count(dbone,collName,whereObj);
    let pageSum = Math.ceil(count/limit);
    if(pageSum < 1) pageSum = 1;
    if(pageIndex > pageSum) pageIndex = pageSum;
    if(pageIndex < 1) pageIndex = 1;
    const skip = (pageIndex - 1) * limit;
    const results = await this.findall(dbone,collName,{
        whereObj,
        skip,
        limit,
        sortObj
    })
    return {
        pageSum,
        pageIndex,
        [collName]:results
    }
}
module.exports.findOneById = async function (dbone,collName,id) {
    const db = await _connect(dbone);
    return new Promise((resolve,reject)=>{
        db.collection(collName).findOne({
            _id:mongodb.ObjectId(id)
        },function (err,results) {
            if(err)
                reject(err);
            else
                resolve(results);
        })
    })
}
module.exports.updateOneById=async function(dbone,collName,id,updateObj){
    const db = await _connect(dbone);
    return new Promise((resolve,reject)=>{
        db.collection(collName).updateOne({
            _id:mongodb.ObjectId(id)
        },updateObj,function (err,results) {
            if(err)
                reject(err);
            else
                resolve(results);
        })
    })
}
module.exports.byIdDeleteOne=async function(dbone,collName,id){
    const db = await _connect(dbone);
    return new Promise((resolve,reject)=>{
        db.collection(collName).deleteOne({_id:mongodb.ObjectId(id)},function (err,results) {
            if(err)
                reject(err);
            else
                resolve(results);
        })
    })
   
}
