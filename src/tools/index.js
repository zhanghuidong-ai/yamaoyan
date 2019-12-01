const tools = {
	ImgUrl(v,w,h){
		const reg = /w.h/
		return v.replace(reg,w+"."+h)
 	}
}
// http://p0.meituan.net/148.208/movie/dd488887e8a1c8ab4723eee4026d25aa1973142.jpg
export default tools
