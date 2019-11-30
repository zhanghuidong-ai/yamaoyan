import React,{Component,Fragment} from "react"
import Download_app_bar from '../components/Download_app_bar'
import Topbar from '../components/Topbar'
import Header from "../components/Header"

export default class Movies extends Component{
	render(){
		return (
			<Fragment>
				<Header>猫眼电影</Header>
				{/* <Download_app_bar></Download_app_bar> */}
				{/* <Topbar></Topbar> */}
			</Fragment>
		)
	}
}