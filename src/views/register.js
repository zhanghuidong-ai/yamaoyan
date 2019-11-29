import React,{Component} from "react"
import Footer from "../components/user/Footer"
import Header from "../components/Header";
import "../assets/style/css/register.css"
export default class My extends Component{
	onfocus(e){
		e.target.classList.add("input-bac");
	}
	onblur(e){
		e.target.classList.remove("input-bac");
	}
	condis(e){
		console.log(e.target.checked)
	}
	render(){
		return (
			<div>
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
				    <dl className="dlbtn"><dd className="dd-padding"><input id="mobile-number" className="input-weak" onChange={()=>{console.log(1111)}} onFocus={this.onfocus} onBlur={this.onblur} type="tel" placeholder="请输入您的手机号" name="mobile"  autoComplete="off" /></dd></dl>
				    <p className="btn-wrapper size-warp">
						<input id="term" type="checkbox" name="terms" defaultChecked onClick={this.condis}className="mt" />
						我已阅读并同意<a className="btn-wrapper-a" href="#">《美团网用户协议》</a>
				    </p>
				    <div className="btn-wrapper">
				        <button type="submit" className="btn-wrapper btn-block btn-larger" disabled="">获取验证码</button>
				    </div>
				<Footer></Footer>
			</div>
		)
	}
}