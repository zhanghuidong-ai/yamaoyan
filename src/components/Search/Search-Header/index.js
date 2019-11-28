import React from "react"
import search from "../../../assets/style/img/search.png"
import xx from "../../../assets/style/img/xx.png"
import {
	withRouter
} from "react-router-dom"
import axios from "axios"
class SearchHeader extends React.Component{
	render(){
		return(
			<div className="search-header">
				<div className="input-wrapper">
					<img src={search} alt="搜索" className="search-icon" />
					<input type="text" onChange={this.getKeyWord.bind(this)} ref={"content"} placeholder="搜电影、搜影院" className="search-input" />
					<img src={xx} alt="xx" className="del-input" style={{"display":this.refs.content?"block":"none"}} />
				</div>
				<div className="cancel" onClick={this.backHome.bind(this)} >取消</div>
			</div>
		)
	}
	async getKeyWord(e){
		const {data} = await axios.get("/ajax/search?kw="+e.target.value+"&cityId=1&stype=-1")
		console.log(data)
	}
	backHome(){
		this.props.history.push('/')
	}

}
export default withRouter(SearchHeader)