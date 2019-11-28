import React,{Component} from "react"
export default class My extends Component{
	UNSAFE_componentWillMount(){
		if(!localStorage.user)
<<<<<<< HEAD
		this.props.history.push("/home2")
=======
		this.props.history.push("/login")
>>>>>>> bfd45ba719734c882ab02e14fa778ba14b49b336
	}
	render(){
		return (
			<div>我的</div>
		)
	}
}