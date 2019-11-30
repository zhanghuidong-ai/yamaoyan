export const upMovieList=(payload)=>(
  {  
      type:'UP_MOVIE_LIST',
      payload
    }
)
export default {
     getMovieList(){
        return (dispatch)=>{
            this.$axios.get('ajax/movieOnInfoList')
            .then(({data})=>{
                    dispatch(upMovieList({
                        movieList:data.movieList,
                        movieIds:data.movieIds
                    }))
           console.log(11111,data)
            })
           
        } 
        }
    }
