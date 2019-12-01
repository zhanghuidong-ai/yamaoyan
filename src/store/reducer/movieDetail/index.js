import initState from "../../state/movieDetail"
export default function(state=initState,{type,payload}){
	state = JSON.parse(JSON.stringify(state))
	if(type==="GET_MOVIE_CINEMAS"){
		state.cinemas=payload.Cinemas
		state.paging=payload.Paging
	}
	if(type === "GET_MOVIE_INFO"){
		state.movieInfo = payload.movieInfo
	}
	return state
}