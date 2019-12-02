import React from 'react'
import './cinemaDetail.css'
import pubsub from 'pubsub-js'
import axios from 'axios'
import CinemaSwi from './swiper'
class cinDetail extends React.Component{
	constructor(){
		super()
		this.state = {
			data:{}
		}
	}
	render(){
		return(
			<div>
				<div className='cinema-wrap'>
					<div className="cinema-info">
							<div className="title line-ellipsis">大地院线影城（珠江摩尔店）</div>
							<div className="location line-ellipsis">昌平区回龙观镇北清路1号院7号楼内7-101-26</div>
							<div className="location-icon" data-bid="dp_wx_cinema_map"></div>
					</div>
					<div>
					{/*轮播图*/}
						<div style={{width:'100%',height:'135px',background:'#ccc'}}>
							<CinemaSwi {...this.state}></CinemaSwi>
						</div>						
						<div className="movie-info">
										<div className="movie-title line-ellipsis">
											<span className="title">两只老虎</span>
											<span className="grade">
												<span>7.9<span className="small">分</span></span>
												
											</span>
											
										</div>
										<div className="movie-desc line-ellipsis">96分钟 | 剧情 | 葛优,乔杉,赵薇</div>
						</div>
									
					</div>
					
				</div>
				<div className="nav-wrap">
				      <div className="nav-block mb-line-t">
					<div className="nav-bar mb-line-b">
						<div className="nav-bar-wrap">
							<div className="nav-item active" data-bid="dp_wx_cinema_show_date" data-id="2019-11-29">
								<span className="date-title">今天11月29日</span>
								
							</div><div className="nav-item" data-bid="dp_wx_cinema_show_date" data-id="2019-11-30">
								<span className="date-title">周六11月30日</span>
								
							</div>
						</div>
					</div>	
				</div>
			 </div>
				{/*nav-warp*/}
			</div>
		)
	}
	componentDidMount(){
		pubsub.subscribe('cinemaId',async (name,id)=>{
			console.log(id)
			const {data} = await axios.get("/ajax/cinemaDetail?cinemaId="+id)
			console.log(data)
			this.setState({
				data
			})
			pubsub.publish("show_cinema",data.showData)
		})
	}
}
export default cinDetail