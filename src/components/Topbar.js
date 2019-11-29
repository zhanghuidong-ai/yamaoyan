import '../assets/style/Topbar.css'
import React from 'react'
import The_MovieList from '../components/The_MovieList'
import {
    NavLink,
    Route,
    BrowserRouter as Router
} from 'react-router-dom'
class Topbar extends React.Component{
    render(){
        return(
            <div className='nav-wrapper:after' > 
            <div className='nav'>

               <div className="city-entry">
                   <span>北京</span>
                   <i className='city-entry-arrow'></i>
               </div>
               <ul className="swith-hot"
               >
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
export default Topbar