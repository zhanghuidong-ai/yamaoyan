import The_MovieList_State from '../../state/MovieList_State' // 电影 state
export default function (state=The_MovieList_State,{type,payload}){
     state = JSON.parse(JSON.stringify(state))
        if(type==='UP_MOVIE_LIST'){ 
            state.movieList=payload.movieList
            // console.log(payload.movieList,payload.movieIds)
        }else if(type==='UP_MORE_LIST'){
            state.moreList=
            [ ...state.moreList,...payload.comingList]
        }
    return state
}

