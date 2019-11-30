import React,{Component,Fragment} from "react"
import {} from "react"
import DownloadAppBar from "../components/Download_app_bar"
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
				<DownloadAppBar></DownloadAppBar>
				<Topbar></Topbar>
			</Fragment>
		)
	}
}