import React,{Component} from "react"
import axios from 'axios'
import SearchCinema from '../components/cinema/searchCinema.js'
export default class My extends Component{
	constructor() {
	    super()
		this.state = {
			cinemaList:[]
		}
	}
	render(){
		return (
			<div>
				<SearchCinema></SearchCinema>
				
			</div>
		)
	}
	async componentDidMount(){
		const {data }= await axios.get("/ajax/filterCinemas?ci=1")
		// console.log(data)
		// this.setState({
		// 	cinemaList:data.cinemas
		// })
	}
}