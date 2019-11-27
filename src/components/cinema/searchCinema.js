import React from 'react'
import axios from 'axios'
export default class SearchCinema extends React.Component{
	constructor(){
		super()
		this.state = {
			isshow:0,
			thatshow:0,
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
		<div>
			<span onClick={this.change.bind(this)} data-index={1}>全城</span> |
			<span onClick={this.change.bind(this)} data-index={2}>品牌</span> |
			<span onClick={this.change.bind(this)} data-index={3}>特色</span>
			<div style={{display:this.state.isshow===1?"block":"none",height:"500px",overflow:"auto"}}>
			<span onClick={this.exchange.bind(this)} data-index={1}>商区</span> |
			<span onClick={this.exchange.bind(this)} data-index={2}>地铁站</span>
				<div style={{display:this.state.thatshow===1?"block":"none",position:'relative'}}>
					{
						this.state.data.district.subItems.map((v,i)=>(
							<div key={i} data-index={i} onClick={this.choose.bind(this)}>{v.name}
							<div style={{position:'absolute',right:0,top:'10px'}}>
							{	
								
										v.subItems?v.subItems.map(m=>(
													<div key={m.id} style={{display:this.state.cryshow===i?"block":"none"}} onClick={this.search.bind(this,{areaId:m.id})}>{m.name}</div>
												)):""
								
								
							}
							</div>
							</div>
						))
					}
				</div>
				<div style={{display:this.state.thatshow===2?"block":"none",position:'relative'}}>
					{
						this.state.data.subway.subItems.map((v,i)=>(
							<div key={i} data-index={i} onClick={this.choose.bind(this)}>{v.name}
							<div style={{position:'absolute',right:0,top:'10px'}}>
							{									
										v.subItems?v.subItems.map(m=>(
													<div key={m.id} style={{display:this.state.cryshow===i?"block":"none"}} onClick={this.search.bind(this,{stationId:m.id})}>{m.name}</div>

												)):""				
							}
							</div>
							</div>
						))
					}
				</div>
			</div>
			
		
			<div style={{display:this.state.isshow===2?"block":"none",height:"500px",overflow:"auto"}}>
			{
				this.state.data.brand.subItems.map(v=>(
					<p key={v.id} onClick={this.search.bind(this,{brandId:v.id})}>{v.name}</p>
				))
			}
			</div>
			<div style={{display:this.state.isshow===3?"block":"none",height:"500px",overflow:"auto"}}>	 
				<div>
					<div>
						<p style={{margin:'5px'}}>特色功能</p>
						{this.state.data.service.subItems.map(v=>(
							<span key={v.id}>{v.name} </span> 
						))}
						<p style={{margin:'5px'}}>特殊厅</p>
						{this.state.data.hallType.subItems.map(v=>(
							<span key={v.id}>{v.name} </span> 
						))}
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
		console.log(data)
	}
	async componentDidMount(){
		const {data} = await axios.get("/ajax/filterCinemas?ci=1")
		this.setState({
			data
		})
		console.log(1111,this.state.data)
		
	}
}