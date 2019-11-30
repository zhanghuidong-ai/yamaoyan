import React,{Component,Fragment} from "react"
<<<<<<< HEAD
import Download_app_bar from '../components/Download_app_bar'
import Topbar from '../components/Topbar'


export default class Movies extends Component{
	render(){
		return (
			<Fragment>
				<div>电影</div>
				<Download_app_bar></Download_app_bar>
				<Topbar></Topbar>
				
=======
import {} from "react"
import Download_app_bar from "../components/Download_app_bar"
import Topbar from "../components/Topbar"
export default class Movie extends Component{
	render(){
		return (
			<Fragment>
				<header className="nav">
					<div className="nav_header">
						<h1>猫眼电影</h1>
					</div>
				</header>
				<Download_app_bar></Download_app_bar>
				<Topbar></Topbar>
>>>>>>> 51c055b3f2c20e2c1934ba6acda9186a7f81716e
			</Fragment>
		)
	}
}