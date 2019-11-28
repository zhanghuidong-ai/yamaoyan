import '../assets/style/The_MovieList.css'
import React,{Fragment}  from 'react'
import {connect} from 'react-redux'
import movieListCreator,{upMovieList} from '../store/createAction/The_MovieList'
import { bindActionCreators} from 'redux'
class The_MovieList extends React.Component{
    render(){
        return(
          <Fragment>
            <div className='page-wrap'>
                { 
                this.props.movieList.map((v)=>(
                    <div className='page-item-wrap ' key={v.id}>
                    <div className="default-img-bg">
                        <img src="https://p0.meituan.net/128.180/movie/609e45bd40346eb8b927381be8fb27a61760914.jpg "/>		
                    </div>
                        <div className=" content">
                            <div className="m-left">
                                <div className=" movie-title">
                <div className="m-title line-ellipsis">{v.nm} </div>
                        {/* <span className='3D'> </span> */}
                          
                        
                        </div>
                        <div className="detail ">          
                            <div className="score "> 
                                <span className="score-suffix">观众评 </span>
                             <span className="grade">{v.sc}</span>
                            </div>
                <div className="actor line-ellipsis">{v.star}</div>
                <div className="show-info line-ellipsis">{v.showInfo}</div>
                        </div>
                        </div>
                         <div className ='buy-ticket'>
                        <span>购票</span>
                        </div>   
                    </div>
                </div> 
                ))
                
                }
            </div>
         </Fragment>  
        )
    }
    componentDidMount(){
        this.props.getMovieList.call(this)
    }
    
}
function mapStateToProps({The_MovieList}){
    console.log(The_MovieList)
    return{
        movieList: The_MovieList.movieList
    }
    
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(movieListCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(The_MovieList) 