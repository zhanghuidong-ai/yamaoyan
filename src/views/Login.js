import React,{Component} from "react"
export default class My extends Component{
	render(){
		return (
			<div>
				<form id="normal-login-form" action="//i.meituan.com/account/login"  autoComplete="off" method="post">
					<dl className="list list-in"><dd className="visibale"><dl>
						<dd className="dd-padding kv-line-r">
							<input id="username" className="input-weak J-login-name J-input J-account" type="text" placeholder="账户名/手机号/Email" ref="email" name="email"  onChange={()=>{console.log(this.refs.email.value)}} />
						</dd>
						<dd className="dd-padding kv-line-r">
							<input id="password" className="input-weak J-input" type="password" placeholder="请输入您的密码" name="password"  ref="password" onChange={()=>{console.log(this.refs.email.value)}}/>
						</dd>
					</dl></dd></dl>
					<input type="hidden" name="touchEvents" value="{&quot;login_normal_input_username&quot;:{&quot;editStartedTimeStamp&quot;:1574860059,&quot;editFinishedTimeStamp&quot;:1574860060,&quot;keyboardEvent&quot;:&quot;0-1-0-1s&quot;},&quot;login_normal_input_password&quot;:{&quot;editStartedTimeStamp&quot;:1574860060,&quot;editFinishedTimeStamp&quot;:1574860061,&quot;keyboardEvent&quot;:&quot;0-1-0-3|3s&quot;},&quot;login_normal_button_submit&quot;:{&quot;touchPoint&quot;:&quot;{331, 24}&quot;,&quot;touchTimeStamp&quot;:1574860061}}" />
					<input type="hidden" name="extraFingerPrint" value="{&quot;listOfPlugins&quot;:&quot;[]&quot;,&quot;cookiesEnabled&quot;:true,&quot;screenResolution&quot;:&quot;375*667&quot;,&quot;colorDepth&quot;:24,&quot;doNotTrack&quot;:&quot;unknown&quot;,&quot;canvas&quot;:&quot;57e8f27847002416aaf8a00774d671460b7c65ef&quot;,&quot;webglVendor&quot;:&quot;Google Inc.&quot;,&quot;webglRenderer&quot;:&quot;ANGLE (Mobile Intel(R) 4 Series Express Chipset Family Direct3D9Ex vs_3_0 ps_3_0)&quot;,&quot;urlSource&quot;:&quot;&quot;}" />
					<input type="hidden" name="requestCode" />
					<input type="hidden" name="responseCode" />
					<div className="btn-wrapper">
						<button type="submit"  className="btn" >登录</button>
					</div>
				</form>
				<ul className="subline">
				        <li><a href="//i.meituan.com/account/signup">立即注册</a>
				        </li><li className="pull-right"><a href="https://passport.meituan.com/useraccount/retrievepassword">找回密码</a>
				</li></ul>
				<footer>
				    <div className="copyright"><span className="copyright">© 猫眼电影 客服电话：<a data-evt="ft/hotline" href="tel:4006705335">400-670-5335</a></span>
				</div></footer>
			</div>
		)
	}
}

