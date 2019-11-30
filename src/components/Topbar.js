import '../assets/style/css/Topbar.css'
import React from 'react'
import The_MovieList from '../components/The_MovieList'
import {
    NavLink,
    Route,
    BrowserRouter as Router,
    withRouter
} from 'react-router-dom'
class Topbar extends React.Component{
    render(){
        return(
            <div className='nav-wrapper' > 
            <div className='top-nav'>

               <div className="city-entry">
                   <span>北京</span>
                   <i className='city-entry-arrow'></i>
               </div>
               <ul className="swith-hot"
               >
                    <NavLink activeClassName='activeRed' className={'li'} exact to={"/"}>正在热映</NavLink>
                    <NavLink activeClassName='activeRed' className={'li'} to={'/.f-hot'}>即将上映</NavLink>
                    <div className='activeLine'></div>
               </ul>
               <div className='search-entry' onClick={()=>this.props.history.push("/search")}></div>
            </div >
            <Router>

            <Route path={'/'} component={The_MovieList}></Route>
            <Route path={'/.f-hot'} ></Route>
            </Router>

            </div>

        )
    }

}
export default withRouter(Topbar)