const getMovieCinemas = function(){
	return async (dispatch)=>{

		const {data} = await this.$axios.post("/ajax/movie?forceUpdate=1575182780880")
		dispatch({
			type:"GET_MOVIE_CINEMAS",
			payload:{
				Cinemas:data.cinemas,
				Paging:data.paging,
				dates:[],
			}
		})

	}
}
const getMovieInfo = function(movieId){
	return async (dispatch)=>{

		const {data} = await this.$axios.get("/ajax/detailmovie?movieId="+movieId)
		dispatch({
			type:"GET_MOVIE_INFO",
			payload:{
				movieInfo:data.detailMovie
			}
		})

	}
}
export default {
	getMovieCinemas,
	getMovieInfo,

}
