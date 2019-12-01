import React ,{Fragment} from "react"
import "../assets/style/css/movie/movieDetail.css"
import Header from "../components/Header.js"
import SearchCinema from "../components/cinema/searchCinema"
import Rjiantou from "../assets/style/img/youjiantou.png"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import movieDetailActionCreator from "../store/actionCreator/movieDetail"
class MovieDetail extends React.Component{
	render(){
		const movieInfo = this.props.movieInfo
		return(
			<Fragment>
			<Header >
				<div>{this.props.title}</div>
			</Header>
			<div className='download-app-bar'>
				<img src='//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png' alt="app"/>
				<div className='app-name-desc'>
					<div className="title">猫眼</div>
					<div className="desc">在线选座，热门影讯，爱上看电影</div>
				</div>
				<input type='button' value ="立即打开"/>
			</div>
			<div className="movie-detail" onClick={()=>{this.props.history.push({"pathname":"/movieInfo/"+movieInfo.id})}}>
				<div className="movie-filter"></div>
				<div className="poster-bg"></div>

					{
						movieInfo.length!==0?
						<div className="movie-detail-detail ">
							<div className="movie-detail-poster">
								<img src={this.$tools.ImgUrl(movieInfo.img,"148","208")} style={{"width":"110px","height":"150px"}} alt="true" />
							</div>
							<div className="movie-detail-content">
								<div className="cn-name line-ellipsis">{movieInfo.nm}</div>
								<div className="title-en-name line-ellipsis">{movieInfo.enm}</div>
								<div className="score line-ellipsis">{movieInfo.sc}
									<span className="snum">({(movieInfo.snum/10000).toFixed(1)}万人评)</span>
								</div>
								<div className="movie-type line-ellipsis">
									<span>{movieInfo.cat}</span>
									<div className="type-group"></div>
								</div>
								<div className="src line-ellipsis">{movieInfo.src}/{movieInfo.dur}分钟</div>
								<div className="pubDesc line-ellipsis">{movieInfo.pubDesc}</div>
							</div>
						</div>:null
					}


				<div className="arrow-g">
           		 <img src={Rjiantou} alt="true" />
       			 </div>
			</div>
			<div className=""></div>
			<div id="showDays">
				<ul id="timeline" className="mb-line-b">
					<li data-day="2019-11-30" className="showDay chosen">
					今天11月30日
					</li>
					<li data-day="2019-11-30" className="showDay">
					今天11月30日
					</li>
					<li data-day="2019-11-30" className="showDay">
					今天11月30日
					</li>
					<li data-day="2019-11-30" className="showDay">
					今天11月30日
					</li>
					<li data-day="2019-11-30" className="showDay">
					今天11月30日
					</li>
					<li data-day="2019-11-30" className="showDay">
					今天11月30日
					</li>
					<li data-day="2019-11-30" className="showDay">
					今天11月30日
					</li>
					<li data-day="2019-11-30" className="showDay">
					今天11月30日
					</li>
				</ul>
			</div>
			<SearchCinema></SearchCinema>

			</Fragment>
		)
	}
	componentDidMount(){
		// console.log(this.props)
		this.props.getMovieInfo.call(this,this.props.match.params.movieId)
		this.props.getMovieCinemas.call(this)

		this.$axios.get("/asgard/asgardapi/media/activity/ad/movie/detail.json?movieId=247949")
		.then((data)=>{
			console.log(data)
		})
	}
}
function mapStateToProps(state){
	return {
		movieInfo:state.movieDetail.movieInfo,
		title:state.movieDetail.movieInfo.nm
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators(movieDetailActionCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail)