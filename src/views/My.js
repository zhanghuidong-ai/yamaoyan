import React,{Component} from "react"
export default class My extends Component{
	componentWillMount(){
		if(!localStorage.user)
		this.props.history.push("/login")
	}
	render(){
		return (
			<div>我的</div>
		)
	}
}