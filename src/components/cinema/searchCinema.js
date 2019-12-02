import React from 'react'
import axios from 'axios'
import './searchCinema.css'
import pubsub from 'pubsub-js'
export default class SearchCinema extends React.Component{
	constructor(){
		super()
		this.state = {
			isshow:0,
			thatshow:1,
			cryshow:0,
			data:{
				district:{
					subItems:[]
				},
				brand:{
					subItems:[]
				},
				hallType:{
					subItems:[]
				},
				service:{
					subItems:[]
				},
				subway:{
					subItems:[]
				}
			}
		}
	}
	render(){
		return(
		<div className='searchCinema'>
			<div className={['searchNav', this.state.isshow>0?"searchNav_active":""].join(' ')}>
				<div className={this.state.isshow===1?"drop_active":''} onClick={this.change.bind(this)} data-index={1}>全城<span className='drop'></span></div> |
				<div className={this.state.isshow===2?"drop_active":''} onClick={this.change.bind(this)} data-index={2}>品牌<span className='drop'></span></div> |
				<div className={this.state.isshow===3?"drop_active":''} onClick={this.change.bind(this)} data-index={3}>特色<span className='drop'></span></div>
			</div>
			
			
			<div style={{display:this.state.isshow===1?"block":"none",overflow:"auto"}}>
			<div className='second_Nav'>
				<div className={this.state.thatshow===1?"second_Nav_active":''} onClick={this.exchange.bind(this)} data-index={1}>商区</div> |
				<div className={this.state.thatshow===2?"second_Nav_active":''} onClick={this.exchange.bind(this)} data-index={2}>地铁站</div>
			</div>
			
				<div style={{display:this.state.thatshow===1?"block":"none",height:'380px',overflow:'auto',position:'relative'}}>
					{
						this.state.data.district.subItems.map((v,i)=>(
							<div key={i} className={['third_list',this.state.cryshow===i?"third_list_active":""].join(' ')}   data-index={i} onClick={this.choose.bind(this)}>{v.name}
							<div style={{position:'fixed',left:'120px',top:'164px',width:'258px',maxHeight:'380px',color:'#000',overflowY:'scroll'}}>
							{	
								
										v.subItems?v.subItems.map(m=>(
													<div key={m.id}  style={{display:this.state.cryshow===i?"block":"none",zIndex:2,background:'rgb(245,245,245)'}} onClick={this.search.bind(this,{areaId:m.id})}>{m.name}</div>
												)):""
												
								
							}
							</div>
							</div>
						))
					}
				</div>
				<div style={{display:this.state.thatshow===2?"block":"none",position:'relative',height:'380px',overflow:'auto'}}>
					{
						this.state.data.subway.subItems.map((v,i)=>(
							<div key={i} className={['third_list',this.state.cryshow===i?"third_list_active":""].join(' ')} data-index={i} onClick={this.choose.bind(this)}>{v.name}
							<div style={{position:'fixed',left:'120px',top:'164px',width:'258px',maxHeight:'380px',color:'#000',overflowY:'scroll'}}>
							{									
										v.subItems?v.subItems.map(m=>(
													<div key={m.id} style={{display:this.state.cryshow===i?"block":"none",zIndex:2,background:'rgb(245,245,245)'}} onClick={this.search.bind(this,{stationId:m.id})}>{m.name}</div>

												)):""				
							}
							</div>
							</div>
						))
					}
				</div>
			</div>
			
		
			<div style={{display:this.state.isshow===2?"block":"none",height:"300px",overflow:"auto"}}>
			{
				this.state.data.brand.subItems.map(v=>(
					<div key={v.id} className='brand_list' onClick={this.search.bind(this,{brandId:v.id})}>{v.name}</div>
				))
			}
			</div>
			<div style={{display:this.state.isshow===3?"block":"none",height:"400px",overflow:"auto"}}>	 
				<div>
					<div>						
						<p style={{margin:'10px'}}>特色功能</p>
						<div style={{margin:'10px',height:'45px'}}>
							{this.state.data.service.subItems.map(v=>(
								<li className='serive_list' key={v.id}>{v.name} </li> 
							))}
						</div>					
						<p style={{margin:'10px'}}>特殊厅</p>
						<div style={{margin:'10px'}}>
						{this.state.data.hallType.subItems.map(v=>(
							<li  className='serive_list' key={v.id}>{v.name} </li> 
						))}
						</div>						
					</div>
				</div>				
			
			</div>
		</div>	
		)
	}
	choose(e){
		// console.log(e.target.getAttribute('data-index'))
		this.setState({
			cryshow:(e.target.getAttribute('data-index'))/1
		})
	}
	
	exchange(e){
		// console.log(e.target.getAttribute('data-index'))
		this.setState({
			thatshow:(e.target.getAttribute('data-index'))/1
		})	
	}
	
	change(e){
		// console.log(e.target.getAttribute('data-index'))
		this.setState({
			isshow:(e.target.getAttribute('data-index'))/1
		})			
	}
	
	async search({brandId=-1,hallType=-1,serviceId=-1,stationId=-1,areaId=-1}){
		const data = await axios.get('ajax/cinemaList',{
			params:{
				limit:20,
				districtId:-1,
				lineId:-1,
				hallType,
				brandId,
				serviceId,
				areaId,
				stationId
			}
		})
		this.setState({
			isshow:0
		})
		pubsub.publish("search_result",data)
		// console.log(pubsub)
		// console.log(data)
	}
	async componentDidMount(){
		const {data} = await axios.get("/ajax/filterCinemas?ci=1")
		this.setState({
			data
		})
		// console.log(1111,this.state.data)
		
	}
}