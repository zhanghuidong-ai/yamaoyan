import React from "react"
import "../order/style.css"
import {connect} from "react-redux"
import axios from "axios"
class MovieOrder extends React.Component{
	render(){
		return (
			<div>
                <div className="navbar">
                    <div className = "nav-wrap-left">
                        <a className="back" href="#"></a>
                    </div>
					<h1 className = "nav-header">我的电影订单</h1>
                </div>
				<div className = "order-item good mb-line-tb">
					<div className = "order-title mb-line-b">
						<div className = "cinema-name line-ellipsis">横店电影城

						</div>
					</div>

				</div>
			</div>
		)
	}
	componentDidMount(){
		this.props.getOrderList()
	}
}
function mapStateToProps(state){
	return {}
}
function mapDispatchToProps(dispatch){
	return{
		getOrderList(){
			dispatch(async ()=>{
				const a = await axios.get("/ajax/myOrderList")
				console.log(a)
			})
			
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieOrder) 
