import React,{Component} from "react"
import Footer from "../components/user/Footer"
import {connect} from "react-redux"
import Home2ACTION from "../store/actionCreator/home2Action"
import {
    bindActionCreators
} from "redux";
import {message} from 'antd';
import {
	Link 
} from "react-router-dom"
import { BackTop } from 'antd';
const error = () => {
  message.error("请填写此字段");
};
class Login extends Component{
	componentDidMount(){
		this.props.goback(true)
	}
	onfocus(e){
		e.target.classList.add("input-bac");
	}
	onblur(e){
		e.target.classList.remove("input-bac");
	}
	btnclick(){
		if(!this.refs.email.value){
			this.refs.email.focus()
			error()
			this.props.error("isIdError")
			return false
		}else{
			this.props.pass("isIdError")
		}
		if(!this.refs.password.value){
			this.refs.password.focus()
			this.props.error("isPassError")
			return false
		}else{
			this.props.pass("isPassError")
		}
	}
	render(){
		return (
			<div>
				<dl className="dllist list-in"><dd className="visibale"><dl>
					<dd className="dd-padding kv-line-r">
						<input id="username" value={this.props.username} onChange={this.props.upuserinfo.bind(this,"username")} className="input-weak" onFocus={this.onfocus} type="text" onBlur={this.onblur} placeholder="账户名/手机号/Email" ref="email" name="email"   />
						<p  className={this.props.isIdError?"error_text":"errblock"}>请填写此字段</p>
					</dd>
					<dd className="dd-padding kv-line-r">
						<input id="password" value={this.props.password} onChange={this.props.upuserinfo.bind(this,"password")} className="input-weak" onFocus={this.onfocus} onBlur={this.onblur} type="password" placeholder="请输入您的密码" name="password"  ref="password" />
						<p className={this.props.isPassError?"error_text":"errblock"}>请填写此字段</p>
					</dd>
				</dl></dd></dl>                                 
				<div className="btn-wrapper">
					<button type="submit"  className="warp_btn" onClick={this.btnclick.bind(this)}>登录</button>
				</div>
				<ul className="subline">
				        <li><Link to={"/register"}>立即注册</Link>
				        </li><li className="pull-right"><a href="https://passport.meituan.com/useraccount/retrievepassword">找回密码</a>
				</li></ul>
				<Footer />
				<div className="Top_back">
				  
				  S c r o l l d o w n t o s e e t h e b o t t o m -r i g h t
				  <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
				  button.<BackTop />
				</div>
				
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		islogin:state.login.islogin,
		isIdError:state.login.isIdError,
		isPassError:state.login.isPassError,
		username:state.login.username,
		password:state.login.password
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators(Home2ACTION,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)

