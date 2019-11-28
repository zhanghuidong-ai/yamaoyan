import React,{Component} from "react"
export default class My extends Component{
	render(){
		return (
			<div>
				<form id="quick-login-form" action="https://i.meituan.com/account/mobilelogin2" autoComplete="off" method="post">
					<dl className="list list-in"><dd className="visibale"><dl>
						<dd className="kv-line-r dd-padding" data-com="smsBtn_quick" data-requrl="/account/custom/mobilelogincode2">
							<input type="tel" name="mobile" id="login-mobile" className="input-weak kv-k J-input J-tel J-login-name" placeholder="请输入手机号" maxLength="11" />
							<div className="to-del J-to-del-mobile J-to-del" ></div>
							<button id="smsCode" type="button" className="btn  btn-weak kv-v btn-captacha" gaevent="imt/buy/quickBuy/send" >获取验证码</button>
						</dd>
						<ul className="tel-select J-select" >
						</ul>
						<dd className="kv-line-r dd-padding">
							<input className="input-weak kv-k J_input_sms J-input" name="code" type="tel" pattern="[0-9]+" placeholder="请输入短信验证码"  />
							<div className="to-del J-to-del-code J-to-del" ></div>
						</dd>
						<dd className="dd-padding regist-tip">
							<div className="txt">未注册过的手机将自动注册为美团账户</div>
						</dd>
					</dl></dd></dl>
					<div className="btn-wrapper">
		<button type="submit" gaevent="imt/login/quick" className="btn btn-normal btn-block mj_login login-btn" disabled="disabled">登录</button>
					</div>
					<input type="hidden" name="touchEvents" />
					<input type="hidden" name="extraFingerPrint" />
					<div className="unreceived-tip J-not-received">
						<p>仍未收到验证码？拨打<a href="tel:10109777" className="dial">查询热线</a>快速获取吧（9：00-23：00提供服务）</p>
					</div>
					<input type="hidden" name="action" />
					<input type="hidden" name="request_code" />
					<input type="hidden" name="response_code" />
				</form>
			</div>
		)
	}
}