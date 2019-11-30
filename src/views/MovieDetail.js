import React ,{Fragment} from "react"
import "../assets/style/css/movie/movieDetail.css"
import Header from "../components/Header.js"
import SearchCinema from "../components/cinema/searchCinema"
export default class MovieDetail extends React.Component{
	render(){
		return(
			<Fragment>
			<Header >
				<div>猫眼电影</div>
			</Header>
			<div className='download-app-bar'>
				<img src='//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png'/>
				<div className='app-name-desc'>
					<div className="title">猫眼</div>
					<div className="desc">在线选座，热门影讯，爱上看电影</div>
				</div>
				<input type='button' value ="立即打开"/>
			</div>
			<div className="movie-detail">
				<div className="movie-filter"></div>
				<div className="poster-bg"></div>
				<div className="movie-detail-detail ">
					<div className="movie-detail-poster">
						<img src="../assets/style/img/bg.jpg" alt="true" />
					</div>
					<div className="movie-detail-content">
						<div className="cn-name line-ellipsis">两只老虎</div>
						<div className="title-en-name line-ellipsis">Two Tigers</div>
						<div className="score line-ellipsis">7.8
							<span className="snum">(4.1万人评)</span>
						</div>
						<div className="movie-type line-ellipsis">
							<span>剧情,喜剧</span>
							<div className="type-group"></div>
						</div>
						<div className="src line-ellipsis">中国大陆/96分钟</div>
						<div className="pubDesc line-ellipsis">2019-11-29 08:00大陆上映</div>
					</div>
				</div>
				<div className="arrow-g">
           		 <img src="../assets/style/img/xx.png" alt="true" />
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
}