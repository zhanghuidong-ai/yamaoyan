

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
export let k = 0
export default {
     getMovieList(){
        return (dispatch)=>{
            this.$axios.get('ajax/movieOnInfoList')
            .then(({data})=>{
                    dispatch(upMovieList({
                        movieList:data.movieList,
                        movieIds:data.movieIds
                    }))
                    localStorage.movieIds=data.movieIds
                    // console.log(7777777777,data.movieList)
            })
           
        } 
        },
        getMore(){
            console.log(k++)
            return (dispatch)=>{
                const movieIds=[]
                localStorage.movieIds.split(',').forEach(i => {
                movieIds.push(i-0) //从localstorage获取movieIds
              });
                const arr=[]        //一维数组变二维
                    for(let i = 0;i<movieIds.length;i+=10){
                         arr.push(movieIds.slice(i,i+10))
                     }
           
                var num =(movieIds.length%10===0? Math.floor(movieIds.length)/10 : Math.floor(movieIds.length/10)+1)||0
                // console.log(num)
               if( num-1>=k){
                  var str= arr[k].join(',')//通过滚动条滚动触发 k值+1
                  this.$axios.get(
                      'ajax/moreComingList'+'?token=&'+"movieIds="+str
                      ) 
                  .then(({data})=>{
                      dispatch(upMoreList({
                          comingList:data.coming,
                      }))
                        //   console.log(56666,data.coming)
                    })
                   
               } 
               else{
                   return false
               }       
              
            } 
        }
    }
