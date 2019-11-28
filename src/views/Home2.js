import {
	Link,
	Route,
	Switch
} from "react-router-dom"
import React from "react"
import Login from "./Login";
import Header from "../components/Header";
import PhoneLogin from "./PhoneLogin";
export default class Index extends React.Component{
    render(){
        return (
			<div>
				<Header >
					<div>猫眼电影</div>
				</Header>
				<nav className={"taba"}>
					<Link to={"/home2"}  onClick={()=>{this.refs.bottom_left.style.left="20px"}}>美团账号登录</Link>
					<Link to={"/home2/PhoneLogin"} onClick={()=>{this.refs.bottom_left.style.left="175px"}}>手机验证登录</Link>
					<div className="slide" ref="bottom_left" style={{left: "20px"}}></div>
				</nav>	
				<Switch>
					<Route path={"/home2"} exact component={Login}></Route>
					<Route path={"/home2/PhoneLogin"} component={PhoneLogin}></Route>
				</Switch>
			</div>
        )
    }	
}