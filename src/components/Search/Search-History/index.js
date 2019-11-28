import React from "react"
export default class SearchHistory extends React.Component{
	render(){
		return(
			<div className="search-history" style={{"display":"none"}}>
				<div className="history-item">
					<span className="history-icon"></span>
					<span className="word ">wqeewqqwe</span>
					<span className="del-word"></span>
				</div>
			</div>
		)
	}
}