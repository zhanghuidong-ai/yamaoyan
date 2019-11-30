import React,{Component,Fragment} from "react"
import axios from 'axios'
import pubsub from 'pubsub-js'
import SearchCinema from '../components/cinema/searchCinema.js'
import CinemaList from '../components/cinema/cinemaList.js'

export default class My extends Component{
	constructor() {
	    super()
		this.state = {
			cinemaList:[]
		}
	}
	render(){
		return (
			<Fragment>
				<header className="header-nav">
					<div className="nav_header">
						<h1>影院</h1>
					</div>
				</header>
				<div style={{height:'40px',textAlign:'center',lineHeight:'40px',background:'#f5f5f5'}}>
				<span>北京</span>
				<input  style={{margin:'0 15px',height: '28px',width:'280px',textAlign:'center',alignItems: 'center',border:' .5px solid #e6e6e6',borderRadius: '5px'}} type='text' placeholder='搜影院' />
				</div>
				<SearchCinema></SearchCinema>

				<CinemaList {...this.state}></CinemaList>
			</Fragment>
		)
	}
	 async componentDidMount(){
		const {data} = await axios.get('ajax/cinemaList',{
			params:{
				limit:20,
				districtId:-1,
				lineId:-1,
				hallType:-1,
				brandId:-1,
				serviceId:-1,
				areaId:-1,
				stationId:-1
			}
		})
		console.log(data)
		this.setState({
			cinemaList:data.cinemas
		})
		// console.log(pubsub.subscribe)
		pubsub.subscribe("search_result",(name,{data})=>{
			// console.log(data)
			this.setState({
				cinemaList:data.cinemas
			})
		})
		
	}
}