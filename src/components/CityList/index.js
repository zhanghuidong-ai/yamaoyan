import React from "react"
import "../../assets/style/css/city/city.css"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import CityListActionCreator from "../../store/actionCreator/city"
class CityList extends React.Component {
	render() {
		console.log(this.props)
		const cities = this.props.cityList ||[]
		const words = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"]
		return (
			<div>城市列表
				<section id="city-list" className="city-list-container">
					<section>
						<div id="locate" className="city-title">
							定位城市
						</div>
						<div className="city-list city-list-inline clearfix">
							<div className="location-city">定位失败，请点击重试</div>
						</div>
					</section>
					<section className="history-city-list">
						<div id="history" className="city-title">
						最近访问城市
						</div>
						<div className="city-list city-list-inline clearfix">
							<div className="city-item" data-nm="南京" data-id="55">南京</div>
							<div className="city-item" data-nm="深圳" data-id="30">深圳</div>
							<div className="city-item" data-nm="北京" data-id="1">北京</div>
						</div>

					</section>
					<section>
						<div id="hot" className="city-title">
							热门城市
						</div>
						<div className="city-list city-list-inline clearfix">
							{
								cities.length>0?cities.map((v,index)=>(
									index<11?
									<div className="city-item" data-nm={v.nm} data-id={v.id} key={v.id} onClick={()=>this.tabCity(v.id,v.nm)} >		{v.nm}
								 	</div>:null
								)):null
							}

						</div>
					</section>
					<section>

					{
							words.map((i)=>(
								<div key={i}>
									<div id={i}  className="city-title city-title-letter">{i}</div>
									<div className="city-list city-list-block clearfix">
										{
											cities.length>0?cities.map((v)=>(
												v.py.charAt(0)===i.toLowerCase()?<div className="city-item" key={v.id} onClick={()=>this.tabCity(v.id,v.nm)} >{v.nm}</div>:""
											)):null
										}

									</div>
								</div>
							))
						}

					</section>
					<section className="city-nav">
						<div className="  nav-item" data-id="locate"  onClick={()=>this.scrollToAnchor("locate")}>
							定位
						</div>

						<div className="  nav-item" data-id="history" onClick={()=>this.scrollToAnchor("history")}>
							最近
						</div>

						<div className="  nav-item" data-id="hot" onClick={()=>this.scrollToAnchor("hot")}>
							热门
						</div>
						{
							words.map((i)=>(
								<div className="nav-letter  nav-item" data-id={i} key={i} onClick={()=>this.scrollToAnchor(i)}>
									{i}
								</div>
							))
						}
						</section>
				</section>
			</div>
		)
	}
	componentDidMount() {
		if(!localStorage.cities)
			this.props.getCityList.call(this)
	}
	scrollToAnchor = (anchorName) => {
		if (anchorName) {
			let anchorElement = document.getElementById(anchorName);
			if(anchorElement) { anchorElement.scrollIntoView(); }
		}
	}
	tabCity(id,cityNm){
		this.props.history.push({"pathname":"/",query:{"id":id,"cityNm":cityNm}})
	}
}
function mapStateToProps(state){
	// console.log(JSON.parse(state.city.cities).cts)
	// console.log(state)
	return {
		cityList: state.city.cities
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators(CityListActionCreator,dispatch)

}
export default connect(mapStateToProps,mapDispatchToProps)(CityList)

