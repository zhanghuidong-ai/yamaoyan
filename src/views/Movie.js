import React,{Component,Fragment} from "react"
import Download_app_bar from '../components/Download_app_bar'
import Topbar from '../components/Topbar'
import The_MovieList from '../components/The_MovieList'

export default class Movies extends Component{
	render(){
		return (
			<Fragment>
				<div>电影</div>
				<Download_app_bar></Download_app_bar>
				<Topbar></Topbar>
				<The_MovieList></The_MovieList>
			</Fragment>
		)
	}
}
// http://m.maoyan.com/ajax/moreComingList?token=cXjtHcupVtoxHFPtanzH8z7DlREAAAAAgQkAABxxQ2injbXDkd5hEwax7pVt1EkwUwrQP09tGz3cgpysidu7yhj-vB6_wxa0X3Kvzw&movieIds=1284949%2C1257417%2C1217125%2C1218029%2C1250690%2C342773%2C1300417%2C247730%2C1227006%2C1250952
// http://m.maoyan.com/ajax/movieOnInfoList?token=cXjtHcupVtoxHFPtanzH8z7DlREAAAAAgQkAABxxQ2injbXDkd5hEwax7pVt1EkwUwrQP09tGz3cgpysidu7yhj-vB6_wxa0X3Kvzw