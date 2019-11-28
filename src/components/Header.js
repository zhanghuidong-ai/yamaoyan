import React,{Component} from "react"
import {
	Link,
	withRouter
} from "react-router-dom"
import "../assets/style/header.css"
class Header extends Component{
	UNSAFE_componentWillMount(){
		console.log(this.props,111)
	}
	render(){
		return (
			<header className="navbar">
			    <div className="nav-wrap-left">
			        <Link className="react back" to={"/"}>返回<i className="text-icon icon-back"></i></Link>
			    </div>
			    <h1 className="nav-header">
			               {this.props.children}
			    </h1>
			</header>
		)
	}
}
export default withRouter(Header)
