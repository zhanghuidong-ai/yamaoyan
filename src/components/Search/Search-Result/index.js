import React from "react"
export default class SearchResult extends React.Component {
	render() {
		return (
			<div className="search-result" >
				<div className="result-wrapper">
					<div className="result">
						<h3>电影/电视/综艺</h3>
						<div className="list">
							<div className="movie">
								<img className="poster" />
								<div className="info">
									<div className="name-score">
										<p className="name ellipsis">
											<span>唐人街探案</span>
										</p>
										<span className="wish">
											<span className="num">1231</span>人想看
											</span>
									</div>
									<div className="detail-section">
										<div className="detail-item">
											<p className="ename ellipsis" >Detective Chinatown 3</p>
											<p className="catogary ellipsis">喜剧,动作,悬疑</p>
											<p className="release">2020-01-25</p>
										</div>
										<div className="btn wish-btn"><span>想看</span></div>
									</div>
								</div>
							</div>
						</div>
						<div className="more-result" data-target="movies" data-total="10720">查看全部10720部影视剧</div>
					</div>
				</div>
			</div>
		)
	}
}