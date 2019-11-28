<<<<<<< HEAD
import {
	NavLink,
	Route,
	Switch
} from "react-router-dom"
import React from "react"
import Movie from "./Movie";
import Cinema from "./Cinema";
import My from "./My";
export default class Index extends React.Component{
    render(){
        return (
			<div>
				<nav className={"three_bot"}>
					<NavLink to={"/"} exact activeClassName={"App-active"}>电影</NavLink>|
					<NavLink to={"/cinema"} activeClassName={"App-active"}>影院</NavLink>|
					<NavLink to={"/my"} activeClassName={"App-active"}>我的</NavLink>
				</nav>	
				<Switch>
					<Route path={"/"} exact component={Movie}></Route>
					<Route path={"/cinema"} component={Cinema}></Route>
					<Route path={"/my"} component={My}></Route>
				</Switch>
			</div>
        )
    }	
=======
import React from "react"
import BottomNav from "../components/BottomNav"
export default class Home extends React.Component{
    render(){
        return (
			<BottomNav></BottomNav>
        )
    }
>>>>>>> bfd45ba719734c882ab02e14fa778ba14b49b336
}