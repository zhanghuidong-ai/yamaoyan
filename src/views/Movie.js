import React,{Component,Fragment} from "react"
import {} from "react"
import Download_app_bar from "../components/Download_app_bar"
import Topbar from "../components/Topbar"
import Header from "../components/Header"
export default class Movie extends Component{
	render(){
		return (
			<Fragment>
				<Header><div>猫眼电影</div></Header>
				<Download_app_bar></Download_app_bar>
				<Topbar></Topbar>
			</Fragment>
		)
	}
}