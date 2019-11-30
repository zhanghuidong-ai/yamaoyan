import '../assets/style/The_MovieList.css'
import React,{Fragment}  from 'react'
import {connect} from 'react-redux'
import movieListCreator,{upMovieList} from '../store/createAction/The_MovieList'
import { bindActionCreators} from 'redux'
import ListenScroll from '../l-tools'
class The_MovieList extends React.Component{
    scroll(){
        console.log(22222)
    }
    render(){
        return(
          <Fragment>
            <div className='page-wrap'>
                { 
                this.props.movieList.map((v)=>(
                   
                    <div className='page-item-wrap ' key={v.id}>
                    <div className="default-img-bg">
                        <img src={this.$tools.ImgUrl(v.img)} alt={v.nm}/>		
                    </div>        
                        <div className=" content">
                            <div className="m-left">
                                <div className=" movie-title">
                <div className="m-title line-ellipsis">{v.nm} </div>
                       {v.version===''? null:( v.version==='v3d imax'?<div className='M-3D-IMAX'> </div>:<div className='M-2D-IMAX'> </div>)}
                       {v.preShow ? <div className='pre-show'></div>:null}
                        </div>
                        <div className="detail ">          
                          
                            {v.globalReleased ? v.sc>0 ?<div className="score "> 
                              <span className="score-suffix">观众评 </span>
                              <span className="grade">{v.sc}</span>
                            </div>:
                            <div className="score "> 
                            <span className="">暂无评价</span>
                            </div>:<div className="score "> 
                            <span className="wish"> {v.wish} </span>
                         <span className="">想看</span>
                        </div>}
                <div className="actor line-ellipsis">{v.star}</div>
                <div className="show-info line-ellipsis">{v.showInfo}</div>
                        </div>
                        </div>
                        { v.globalReleased?<div className ='buy-ticket'>
                          <span>购票</span> 
                        </div> : <div className ='pre-buy-ticket'>
                    <span>预售</span>
                    </div>     }
                    </div>
                     
                </div> 
                ))

                }
                <ListenScroll num={228} scrollCallback={this.scroll}></ListenScroll>
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
