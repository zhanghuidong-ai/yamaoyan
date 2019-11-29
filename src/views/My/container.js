import React from "react"
import Navheader from "./nav-header"
import Header from "./header"
import List from "./List"
import Mycenter from "./Mycenter"

export default class container extends React.Component{
	render(){
		return (
			<div>
				<Navheader/>
				<Header/>
				<List/>
				<Mycenter/>
			</div>
		)
	}
}