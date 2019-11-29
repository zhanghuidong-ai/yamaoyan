import React from "react"
export default class List extends React.Component{
	
	MovieOrder =()=>{
		window.location.href = '/order'
	}
	Store =()=>{
		window.location.href = '/Store'
	}

	render(){
		return (
			<div className = "group">
					<div className = "orders">
						<div className = "title">我的订单</div>
						<div className = "mb-outline-b title-line"></div>
						<div class="list list-two">
							<div class="order-item movie" onClick={this.MovieOrder}>
                            	<a data-type="mip">
									<p>电影</p>
								</a>
                       		 </div>
                        <div class="order-item store" onClick={this.Store}>
							<a data-link="/store/order/list?$from=canary">
								<p>商城</p>
							</a>
						</div>
                    </div>
					</div>
			</div>
		)
	}
}

