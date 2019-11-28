import '../assets/style/Topbar.css'
import React from 'react'
import {
    NavLink,
    Route,
    BrowserRouter as Router,
    withRouter
} from 'react-router-dom'
class Topbar extends React.Component{
    render(){
        return(
            <div>
            <div className='top-nav'>


               <div className="city-entry">
                   <span>北京</span>
                   <i className='city-entry-arrow'></i>
               </div>
               <ul className="swith-hot"
               >
                   <Router>
                    <NavLink activeClassName='activeRed' className={'li'} exact to={"/"}>正在热映</NavLink>
                    <NavLink activeClassName='activeRed' className={'li'} to={'/.f-hot'}>即将上映</NavLink>

                    {/* <Route></Route>
                    <Route></Route> */}
                    </Router>
                    <div className='activeLine'></div>
               </ul>
               <div className='search-entry' onClick={()=>this.props.history.push("/search")}></div>
            </div >
            </div>

        )
    }

}
export default withRouter(Topbar)