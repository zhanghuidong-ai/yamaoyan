import React,{Component} from "react"
import {
	withRouter
} from "react-router-dom"
class Popup extends Component{
	render(){
		return(
			<div id="needslipBg" className="need-slip-bg">
				<div id="needslipWrapper" className="need-slip-wrapper">
					<div id="needslip"><div className="yoda-slider-tip " id="yodaSliderTip">3s 未完成验证，请重试。</div>
					<div className="yoda-slider-wrapper ">
						<p className="sliderTitle ">请向右拖动滑块</p>
						<div className="boxWrapper " id="yodaBoxWrapper">
							<div className="boxStatic " id="yodaBox"></div>
							<div className="moveingBar " id="yodaMoveingBar"></div>
						</div>
					</div></div>
				</div>
			</div>
		)
	}
}
export default withRouter(Popup)