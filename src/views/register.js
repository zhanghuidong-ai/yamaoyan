import React,{Component,Fragment} from "react"
import Footer from "../components/user/Footer"
import Header from "../components/Header";
import "../assets/style/css/register.css"
import {connect} from "react-redux"
import Home2ACTION from "../store/actionCreator/home2Action"
import {
    bindActionCreators
} from "redux";
import "../assets/style/css/popup.css"
import Popup from "../components/Popup"
class Register extends Component{
	UNSAFE_componentWillMount(){
		this.props.changedisable(true)
	}
	onfocus(e){
		e.target.classList.add("input-bac");
	}
	onblur(e){
		e.target.classList.remove("input-bac");
	}
	telchange(e){
		if(e.target.value/1&&e.target.value.length===11&&this.refs.terms.checked) this.props.changedisable(false)
		else this.props.changedisable(true)
	}
	ischeck(e){
		if(!e.target.checked) this.props.changedisable(true)
		else if(this.refs.mobile.value/1&&this.refs.mobile.value.length===11&&this.refs.terms.checked) this.props.changedisable(false)
	}
	render(){
		return (
			<Fragment>
				<Header >
					<div>猫眼电影</div>
				</Header>
				<dl className="dllist"><dd className="dd-padding">
					<ol className="crumbs">
							<li className="active">输入手机号</li>
							<li>输入验证码</li>
							<li>设置密码</li>
					</ol>
				</dd></dl>
				<dl className="dlbtn"><dd className="dd-padding"><input id="mobile-number" ref="mobile" className="input-weak" onChange={this.telchange.bind(this)} onFocus={this.onfocus} onBlur={this.onblur} type="tel" placeholder="请输入您的手机号" name="mobile"  autoComplete="off" /></dd></dl>
				<p className="btn-wrapper size-warp">
					<input id="term" type="checkbox" name="terms" ref={"terms"} defaultChecked onClick={this.ischeck.bind(this)} className="mt" />
					我已阅读并同意<a className="btn-wrapper-a" href="#">《美团网用户协议》</a>
				</p>
				<div className="btn-wrapper">
					<button type="submit"  className="btn-block btn-larger" onClick={()=>{console.log(1111)}} disabled={this.props.disabled}>获取验证码</button>
				</div>
				<Popup />
				<Footer></Footer>
			</Fragment>
		)
	}
}
function mapStateToProps(state){
	return {
		disabled:state.login.disabled,
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators(Home2ACTION,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Register)