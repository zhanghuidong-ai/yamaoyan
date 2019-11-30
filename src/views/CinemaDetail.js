import React from "react"

export default class CinemaDetail extends React.Component{
	render(){
		return(
			<div>
				电影院详情
			</div>
		)
	}
	componentDidMount(){
		this.$axios.get("/ajax/search").then((data)=>{
			console.log(data)
		})
	}
}