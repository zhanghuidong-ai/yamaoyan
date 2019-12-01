import React,{Component,Fragment} from "react"
import "../../assets/style/css/search/search.css"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import SearchHeaderActionCreater from "../../store/actionCreator/search/index"
import SearchHeader from "./Search-Header"
import SearchHistory from "./Search-History"
import SearchResult from "./Search-Result"
import Header from "../Header"
class Search extends Component {
	render() {
		return (
			<Fragment>
				<Header>猫眼电影</Header>
				<div className="search-wrapper">
					<SearchHeader getSearchResult={this.props.getSearchResult}></SearchHeader>
					<SearchHistory ></SearchHistory>
					<SearchResult moviesList={this.props.moviesList} cinemasList={this.props.cinemasList}></SearchResult>
				</div>
			</Fragment>
		)
	}
	componentDidMount(){
		// console.log(this.props)
	}
}
function mapStateToProps({login,search}) {
    return {
		login,
		moviesList:search.movies|| {},
		cinemasList:search.cinemas ||{},
    }
}
function mapDispatchToProps(dispatch){
	return bindActionCreators(SearchHeaderActionCreater,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)
// export default Search