import {
	NavLink,
	Route,
	Switch
} from "react-router-dom"
import React from "react"
import Movie from "./Movie";
import Cinema from "./Cinema";
export default class Index extends React.Component{
    render(){
        return (
			<div>
				<nav >
					<NavLink to={"/"} exact activeClassName={"App-active"}>电影</NavLink>|
					<NavLink to={"/cinema"} activeClassName={"App-active"}>影院</NavLink>|
					<NavLink to={"/my"} activeClassName={"App-active"}>我的</NavLink>
				</nav>	
				<Switch>
					<Route path={"/"} exact component={Movie}></Route>
					<Route path={"/cinema"} component={Cinema}></Route>
				</Switch>
			</div>
        )
    }	
}