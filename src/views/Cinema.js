import React,{Component} from "react"
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
			<div>
			  <div>
				<div style={{height:'40px',textAlign:'center',lineHeight:'40px',background:'red',color:'#fff',fontSize:'15px'}}>影院</div>
				<div style={{height:'40px',textAlign:'center',lineHeight:'40px',background:'#f5f5f5'}}>
				<span>北京</span>
				<input  style={{margin:'0 15px',height: '28px',width:'280px',textAlign:'center',alignItems: 'center',border:' .5px solid #e6e6e6',borderRadius: '5px'}} type='text' placeholder='搜影院' />
				</div>
				<SearchCinema></SearchCinema>
			  </div>
				<CinemaList {...this.state}></CinemaList>
			</div>
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