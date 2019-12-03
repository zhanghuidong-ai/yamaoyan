import '../assets/style/The_MovieList.css'
import React,{Fragment}  from 'react'
import {connect} from 'react-redux'
import movieListCreator,{upMovieList} from '../store/createAction/The_MovieList'
import { bindActionCreators} from 'redux'
import ListenScroll from '../l-tools'
class The_MovieList extends React.Component{
   
    render(){
        console.log(this.props.location.query)
        return(
          <Fragment>
            <div className='page-wrap'>
                {
                this.props.movieList
                .map((v)=>(

                    <div className='page-item-wrap ' key={v.id}  onClick={()=>this.props.history.push({pathname:'/movieDetail/'+v.id+'/cityId/'+this.props.location.query.id})}>
                    <div className="default-img-bg">
                        <img src={this.$tools.ImgUrl(v.img,'128','180')} alt={v.nm}/>		
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
                {this.props.moreList
        
        .map((v)=>(
            
            <div className='page-item-wrap ' key={v.id} onClick={()=>this.props.history.push({pathname:'/movieDetail/'+v.id+'cityId'+this.props.location.query.id})}>
                    <div className="default-img-bg">
                        <img src={this.$tools.ImgUrl(v.img,'128','180')} alt={v.nm}/>		
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
                ))}
   
            <ListenScroll  num={100} scrollCallback={this.props.getMore.bind(this)}></ListenScroll>
                
            </div>
         </Fragment>
        )
    }
    componentDidMount(){
        this.props.getMovieList.call(this)
        // this.props.getMore.call(this)
        
        
    }
    
}
function mapStateToProps({The_MovieList}){
    // console.log(The_MovieList.moreList)
    return{
        movieList: The_MovieList.movieList,
        moreList: The_MovieList.moreList
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(movieListCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(The_MovieList)
