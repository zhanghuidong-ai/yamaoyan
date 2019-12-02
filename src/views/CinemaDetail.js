import React from "react"
import axios from 'axios'
import Header from '../components/Header.js'
import pubsub from 'pubsub-js'
import DownloadAppBar from '../components/Download_app_bar.js'
import DetailBody from '../components/cinemaDetail/cinemaDetail_body.js'
export default class CinemaDetail extends React.Component{

	render(){
		return(
			<div>
				<Header></Header>
				<DownloadAppBar></DownloadAppBar>
				<DetailBody></DetailBody>
			</div>
		)
	}
	componentDidMount(){
		// console.log(111,this.props.location.state.id)
		pubsub.publish("cinemaId",this.props.location.state.id)	
	}
	
}