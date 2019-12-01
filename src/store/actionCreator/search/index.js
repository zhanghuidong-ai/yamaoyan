
export const getSearchResult = payload =>(
	{
		type:"GET_SEARCH_RESULT",
		payload
	}
)
export default {
	getSearchResult(){
		return async (dispatch)=>{
			const {data} = await this.$axios.get("/ajax/search?kw="+this.refs.content.value+"&cityId=1&stype=-1")
			// let arr
			// if(localStorage.searchHistory){
			// 	if(this.refs.content.value!==""){
			// 		arr = JSON.parse(localStorage.searchHistory)
			// 		arr.unshift(this.refs.content.value)
			// 		localStorage.searchHistory = JSON.stringify(arr)
			// 	}
			// 	if(arr.length>3){
			// 		arr.pop()
			// 	}

			// }

			const {movies,cinemas} = data
			dispatch({
				type:"GET_SEARCH_RESULT",
				payload:{
					movies,
					cinemas
				}
			})
		}

	}
}