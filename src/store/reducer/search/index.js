
import SearchInit from "../../state/search"
export default (state=SearchInit,{type,payload})=>{
	state = JSON.parse(JSON.stringify(state))
	if(type==="GET_SEARCH_RESULT"){
		state.cinemas = payload.cinemas
		state.movies = payload.movies

	}
	return state
}