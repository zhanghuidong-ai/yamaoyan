let b = [{ id: '4', result: '第三' }, { id: '2', result: '第四' }, { id: '2', result: '第二' },{id:"5",result:"12323423423"}]
let d = []
let hash = {}
d = b.reduce((item, next) => {
	hash[next.id] ? '' : hash[next.id] = true && item.unshift(next)
	// console.log(hash[next.id])
	console.log(next.id)
	// console.log(item)
	return item
}, [])
console.log(d, '看看看')


// let b = [{id:"1",result:"dss"},{id:"3",result:"dsfds"},{id:"1",result:"dadsfeaw"}]
// let d = []
// let hash ={}
// d = b.reduce((item,next)=>{
// 	hash[next.id]
// })