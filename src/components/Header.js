import React,{Component} from "react"
import {
	Link,
	withRouter
} from "react-router-dom"
import "../assets/style/header.css"
class Header extends Component{
	render(){
		return (
			<header className="navbar">
			    <div className="nav-wrap-left">
			        <Link className="react back" to={"/"}><i className="text-icon iconfont icon-left-arrow"></i></Link>
			    </div>
			    <h1 className="nav-header">
			               {this.props.children}
			    </h1>
			</header>
		)
	}
}
export default withRouter(Header)
