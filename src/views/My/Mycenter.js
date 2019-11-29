import React from "react"
import "./styles.css"
export default class Mycenter extends React.Component{

	render(){
		return (
			<div className = "group">
				<div class="mb-outline-tb">
					<div class="coupon item mb-line-b">
						<a data-link="/vod/order?$from=canary" >
							<span>在线观影</span>
						</a>
					</div>
					<div class="coupon item mb-line-b">
						<a data-link="/myCoupon?$from=canary">
							<span>优惠券</span>
						</a>
					</div>
					<div class="membercard item mb-line-b">
						<a data-link="/multiplecard/mylist?$from=canary">
							<span>折扣卡</span>
						</a>
					</div>
				</div>
			</div>
			
		)
	}
}

