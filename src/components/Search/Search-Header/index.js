import React from "react"
import search from "../../../assets/style/img/search.png"
import xx from "../../../assets/style/img/xx.png"
import {
	withRouter,
} from "react-router-dom"
class SearchHeader extends React.Component{
	render(){
		return(
			<div className="search-header">
				<div className="input-wrapper">
					<img src={search} alt="搜索" className="search-icon" />
					<input type="text" onChange={this.props.getSearchResult.bind(this)} ref="content" placeholder="搜电影、搜影院" className="search-input" />
					<img src={xx} alt="xx" className="del-input" style={{"display":this.refs.content?"block":"none"}} onClick={this.delKeyWord.bind(this)} />
				</div>
				<div className="cancel" onClick={this.backHome.bind(this)} >取消</div>
			</div>
		)
	}
	backHome(){
		this.props.history.push('/')
	}
	delKeyWord(){
		this.refs.content.value=null
		this.props.getSearchResult.call(this)
	}
	UNSAFE_componentWillMount(){
		if(!localStorage.searchHistory){
			localStorage.searchHistory=JSON.stringify([])
		}
	}
}
export default withRouter(SearchHeader)