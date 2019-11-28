import axios from "axios"
export default {
	getSearchResult(){
		return async ()=>{
			const {data} = await axios.get("/ajax/search?kw="+e.target.value+"&cityId=1&stype=-1")
			console.log(data)
		}

	}
}