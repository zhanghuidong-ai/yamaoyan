export const upMovieList=(payload)=>(
  {  
      type:'UP_MOVIE_LIST',
      payload
    }
)
export const upMoreList=(payload)=>(
    {  
        type:'UP_MORE_LIST',
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
         
            })
           
        } 
        },
        getMoreList(){
            return (dispatch)=>{
                
                this.$axios.get('ajax/ajax/moreComingList',{
                    params:{
                        
                    }
                })
                .then(({data})=>{
                        dispatch(upMoreList({
                            movieList:data.movieList,
                           
                        }))
               console.log(56666,data)
                })
               
            } 
        }
    }
