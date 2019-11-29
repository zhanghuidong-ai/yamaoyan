import axios from "axios"
export const getSearchResult = payload =>(
	{
		type:"GET_SEARCH_RESULT",
		payload
	}
)
export default {
	getSearchResult(){
		return async (dispatch)=>{
			const {data} = await axios.get("/ajax/search?kw="+this.refs.content.value+"&cityId=1&stype=-1")

			const {movies,cinemas} = data
			console.log(movies,cinemas)
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