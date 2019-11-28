import React,{Component} from "react"
import Footer from "../components/user/Footer"
import {connect} from "react-redux"
import Home2ACTION from "../store/actionCreator/home2Action"
import {
    bindActionCreators
} from "redux";
import {message} from 'antd';
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
				{/*<form id="normal-login-form" action="//i.meituan.com/account/login"  autoComplete="off" method="post">*/}
					<dl className="list list-in"><dd className="visibale"><dl>
						<dd className="dd-padding kv-line-r">
							<input id="username" value={this.props.username} onChange={this.props.upuserinfo.bind(this,"username")} className="input-weak" onFocus={this.onfocus} type="text" onBlur={this.onblur} placeholder="账户名/手机号/Email" ref="email" name="email"   />
							<p  className={this.props.isIdError?"error_text":"errblock"}>请填写此字段</p>
						</dd>
						<dd className="dd-padding kv-line-r">
							<input id="password" value={this.props.password} onChange={this.props.upuserinfo.bind(this,"password")} className="input-weak" onFocus={this.onfocus} onBlur={this.onblur} type="password" placeholder="请输入您的密码" name="password"  ref="password" />
							<p className={this.props.isPassError?"error_text":"errblock"}>请填写此字段</p>
						</dd>
					</dl></dd></dl>                                 
					<input type="hidden" name="touchEvents" value="{&quot;login_normal_input_username&quot;:{&quot;editStartedTimeStamp&quot;:1574860059,&quot;editFinishedTimeStamp&quot;:1574860060,&quot;keyboardEvent&quot;:&quot;0-1-0-1s&quot;},&quot;login_normal_input_password&quot;:{&quot;editStartedTimeStamp&quot;:1574860060,&quot;editFinishedTimeStamp&quot;:1574860061,&quot;keyboardEvent&quot;:&quot;0-1-0-3|3s&quot;},&quot;login_normal_button_submit&quot;:{&quot;touchPoint&quot;:&quot;{331, 24}&quot;,&quot;touchTimeStamp&quot;:1574860061}}" />
					<input type="hidden" name="extraFingerPrint" value="{&quot;listOfPlugins&quot;:&quot;[]&quot;,&quot;cookiesEnabled&quot;:true,&quot;screenResolution&quot;:&quot;375*667&quot;,&quot;colorDepth&quot;:24,&quot;doNotTrack&quot;:&quot;unknown&quot;,&quot;canvas&quot;:&quot;57e8f27847002416aaf8a00774d671460b7c65ef&quot;,&quot;webglVendor&quot;:&quot;Google Inc.&quot;,&quot;webglRenderer&quot;:&quot;ANGLE (Mobile Intel(R) 4 Series Express Chipset Family Direct3D9Ex vs_3_0 ps_3_0)&quot;,&quot;urlSource&quot;:&quot;&quot;}" />
					<input type="hidden" name="requestCode" />
					<input type="hidden" name="responseCode" />
					<div className="btn-wrapper">
						<button type="submit"  className="warp_btn btn-block" onClick={this.btnclick.bind(this)}>登录</button>
					</div>
				{/*</form>*/}
				<ul className="subline">
				        <li><a href="//i.meituan.com/account/signup">立即注册</a>
				        </li><li className="pull-right"><a href="https://passport.meituan.com/useraccount/retrievepassword">找回密码</a>
				</li></ul>
				<Footer />
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

