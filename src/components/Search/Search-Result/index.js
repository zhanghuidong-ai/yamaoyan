import React from "react"
import {
	withRouter,
} from "react-router-dom"
class SearchResult extends React.Component {
	render() {
		const moviesList = this.props.moviesList.list || []
		const cinemasList = this.props.cinemasList.list ||[]
		const cinemasLists= cinemasList.splice(0,3)
		console.log(this.props)
		return (
			<div className="search-result"  >
				<div className="result-wrapper" style={{ "display": moviesList.length > 0 ? "block" : "none" }}>
					<div className="result">
						<h3>电影/电视/综艺</h3>
						{
							moviesList.map((v) => (
								<div key={v.id} className="list"  >
									<div className="movie" onClick={()=>this.props.history.push({pathname:"/movieDetail/"+v.id})}>
										<img className="poster" src={this.$tools.ImgUrl(v.img)} alt={v.nm} />
										<div className="info">
											<div className="name-score">
												<p className="name ellipsis">
													<span>{v.nm}</span>
												</p>
												<span className="wish">
													<span className="num">{v.wish}</span>人想看
												</span>
											</div>
											<div className="detail-section">
												<div className="detail-item">
													<p className="ename ellipsis" >{v.enm}</p>
													<p className="catogary ellipsis">{v.cat}</p>
													<p className="release">{v.rt}</p>
												</div>
												<div className="btn wish-btn"><span>想看</span></div>
											</div>
										</div>
									</div>
								</div>
							))
						}
						<div className="more-result">查看全部{this.props.moviesList.total}部影视剧</div>
					</div>
					<div className="result">
						<h3>影院</h3>
							{
								cinemasLists.map((v)=>(
									<div key={v.id} className="list">
									<div className="cinema" onClick={()=>this.props.history.push({pathname:"/cinemaDetail/"+v.id})}>
										<div className="cinema-info">
											<div className="name-price">
												<p className="name ellipsis">
													{v.nm}
												</p>
												<span className="sell-price">
													<span className="price">{v.sellPrice}</span>元起
												</span>
											</div>
											<p className="address ellipsis">{v.addr}</p>

											<p className="feature-tags">
										        <span >座</span>
									            <span >改签</span>
              									<span className="featrue">小吃</span>
        									</p>
										</div>
										<div className="distance">{v.distance}</div>
									</div>
								</div>
								))

							}
							<div className="more-result">查看全部{this.props.cinemasList.total}部影视剧</div>

					</div>
				</div>
			</div>
		)
	}
}
export default withRouter(SearchResult)