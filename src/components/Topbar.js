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
<<<<<<< HEAD
            <div className='nav-wrapper:after' > 
            <div className='nav'>
=======
            <div>
            <div className='top-nav'>

>>>>>>> 51c055b3f2c20e2c1934ba6acda9186a7f81716e

               <div className="city-entry">
                   <span>北京</span>
                   <i className='city-entry-arrow'></i>
               </div>
               <ul className="swith-hot"
               >
<<<<<<< HEAD
                   <Router>
                    <NavLink activeClassName='activeRed' className={'li'} exact to={"/"}>正在热映</NavLink>
                    <NavLink activeClassName='activeRed' className={'li'} to={'/.f-hot'}>即将上映</NavLink>
                    {/* <Route to={'/'} component={The_MovieList}></Route> */}
                    {/* <Route></Route>
                    <Route></Route> */}
                    </Router>
                    <div className='activeLine'></div>
               </ul>
               <div className='search-entry'></div>
=======
                    <NavLink activeClassName='activeRed' className={'li'} exact to={"/"}>正在热映</NavLink>
                    <NavLink activeClassName='activeRed' className={'li'} to={'/.f-hot'}>即将上映</NavLink>
                    <div className='activeLine'></div>
               </ul>
               <div className='search-entry' onClick={()=>this.props.history.push("/search")}></div>
>>>>>>> 51c055b3f2c20e2c1934ba6acda9186a7f81716e
            </div >
            {/* <The_MovieList></The_MovieList> */}
            <Router>

            <Route path={'/'} component={The_MovieList}></Route>
            <Route path={'/.f-hot'} ></Route>
            </Router>

            </div>

        )
    }

}
export default withRouter(Topbar)