import {
	Link,
	Route,
	Switch
} from "react-router-dom"
import React from "react"
import Login from "./Login";
import Header from "../components/Header";
import PhoneLogin from "./PhoneLogin";
import {connect} from "react-redux"
import Home2ACTION from "../store/actionCreator/home2Action"
import {
    bindActionCreators
} from "redux";
class Index extends React.Component{
	componentWillUnmount(){
		this.props.clearinfo()
	}
    render(){
        return (
			<div>
				<Header >
					<div>猫眼电影</div>
				</Header>
				<nav className={"taba"}>
					<Link to={"/home2"}>美团账号登录</Link>
					<Link to={"/home2/PhoneLogin"}>手机验证登录</Link>
					<div className="slide" ref="bottom_left" style={{left:this.props.isgoback?"10px":"190px"}}></div>
				</nav>	
				<Switch>
					<Route path={"/home2"} exact component={Login}></Route>
					<Route path={"/home2/PhoneLogin"} component={PhoneLogin}></Route>
				</Switch>
			</div>
        )
    }	
}
function mapStateToProps(state){
	return {
		isgoback:state.login.isgoback,
		islogin:state.login.islogin,
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators(Home2ACTION,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Index)