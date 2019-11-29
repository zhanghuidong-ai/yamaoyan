import React,{Component} from "react"
export default class My extends Component{
	UNSAFE_componentWillMount(){
		if(!localStorage.user)
		this.props.history.push("/home2")
	}
	render(){
		return (
			<div>我的</div>
		)
	}
}