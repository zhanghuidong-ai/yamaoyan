import React,{Component,Fragment} from "react"
import Footer from "../components/user/Footer"
import {connect} from "react-redux"
import Home2ACTION from "../store/actionCreator/home2Action"
import {
    bindActionCreators
} from "redux";
import {
	Link 
} from "react-router-dom"
class PhoneLogin extends Component{
	componentDidMount(){
		this.props.goback(false)
	}
	onfocus(e){
		e.target.classList.add("input-bac");
	}
	onblur(e){
		e.target.classList.remove("input-bac");
	}
	telchange(e){
		this.props.upuserinfo.bind(this,"telid",e)()
		if(e.target.value/1&&e.target.value.length===11) this.props.changedisable(false)
		else this.props.changedisable(true)
	}
	render(){
		return (
			<Fragment>
				<dl className="dllist list-in"><dd className="visibale"><dl>
					<dd className="kv-line-r dd-padding" data-com="smsBtn_quick" data-requrl="/account/custom/mobilelogincode2">
						<input type="tel" value={this.props.telid} onChange={this.telchange.bind(this)} name="mobile" id="login-mobile" className="input-weak kv-k "  onFocus={this.onfocus} onBlur={this.onblur} placeholder="请输入手机号" maxLength="11" />
						<div className="to-del J-to-del-mobile J-to-del" ></div>
						<button id="smsCode" onClick={()=>console.log(111)} type="button" className="btn-weak kv-v btn-captacha" disabled={this.props.disabled}>获取验证码</button>
					</dd>
					<dd className="kv-line-r dd-padding">
						<input className="input-weak kv-k J_input_sms J-input" name="code" type="tel" pattern="[0-9]+" placeholder="请输入短信验证码" disabled />
					</dd>
					{/*<dd className="dd-padding regist-tip">
						<div className="txt">未注册过的手机将自动注册为美团账户</div>
					</dd>*/}
					</dl></dd></dl>
					<div className="btn-wrapper">
						<button type="submit" className="warp_btn" disabled={this.props.disabled}>登录</button>
					</div>
					{/*<div className="unreceived-tip J-not-received">
						<p>仍未收到验证码？拨打<a href="tel:10109777" className="dial">查询热线</a>快速获取吧（9：00-23：00提供服务）</p>
					</div>*/}
				<ul className="subline">
						<li><Link to={"/register"}>立即注册</Link>
						</li><li className="pull-right"><a href="https://passport.meituan.com/useraccount/retrievepassword">找回密码</a>
				</li></ul>
				<Footer />
				<div className="msg-bg" style={{left: "0px", height:" 1334px"}}></div>
				<div id="msg" className="msg-doc msg-alert">
					<div className="msg-bd">手机号输入不正确，请重新输入</div>
					<div className="msg-ft cf"><span className="msg-btn msg-btn-ok" data-event="ok">确定</span></div>
				</div>
			</Fragment>
		)
	}
}
function mapStateToProps(state){
	return {
		islogin:state.login.islogin,
		isIdError:state.login.isIdError,
		isPassError:state.login.isPassError,
		disabled:state.login.disabled,
		isget:state.login.isget,
		isgoback:state.login.isgoback,
		telid:state.login.telid
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators(Home2ACTION,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(PhoneLogin)