import React from "react"
import "./index.css"
import SearchHeader from "./Search-Header"
import SearchHistory from "./Search-History"
import SearchResult from "./Search-Result"
class Search extends React.Component {
	render() {
		return (
			<div className="search-wrapper">
				<SearchHeader></SearchHeader>
				{/* <SearchHistory></SearchHistory> */}
				{/* <SearchResult></SearchResult> */}
			</div>
		)
	}
}
export default Search