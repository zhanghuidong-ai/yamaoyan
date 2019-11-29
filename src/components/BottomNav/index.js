import React from "react"
import {
	NavLink,
	Route,
	Switch
} from "react-router-dom"
import Movie from "../../views/Movie";
import Cinema from "../../views/Cinema";
import My from "../../views/My";
class BottomNav extends React.Component{
	render(){
		return(
			<div>
				<nav className="bottom-nav-bar">
					<NavLink to={"/"} exact activeClassName={"App-active"} className="nav-icon-wrapper">
						<span className="nav-icons">
							<i className="iconfont icon-dianyingb" ></i>
						</span>
						<span className="nav-text" >电影</span>
					</NavLink>
					<NavLink to={"/cinema"} activeClassName={"App-active"} className="nav-icon-wrapper">
						<span className="nav-icons">
							<i className="iconfont icon-yingyuan" ></i>
						</span>
						<span className="nav-text" >影院</span>
					</NavLink>
					<NavLink to={"/my"} activeClassName={"App-active"} className="nav-icon-wrapper">
						<span className="nav-icons">
							<i className="iconfont icon-wode" ></i>
						</span>
						<span className="nav-text" >我的</span>
					</NavLink>
				</nav>
				<Switch>
					<Route path={"/"} exact component={Movie}></Route>
					<Route path={"/cinema"} component={Cinema}></Route>
					<Route path={"/my"} component={My}></Route>
				</Switch>
			</div>
		)
	}
}
export default BottomNav