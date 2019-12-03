import React from 'react';
import './App.css';
import "./assets/style/css/reset.css"
import "./assets/font_icon/iconfont.css"
import {Route,Switch}  from "react-router-dom"
import Home from "./views/Home"
// import My from "./views/My";
import Login from "./views/Login";
import "./assets/style/css/home2.css"
import Home2 from "./views/Home2";
import Search from "./components/Search"
import Cinema from "./views/Cinema";
import MovieDetail from "./views/MovieDetail"
import CinemaDetail from "./views/CinemaDetail"
import Register from "./views/register"
import CityList from './components/CityList';
import MovieInfos from './views/MovieInfos';
function App() {
  return (
    <div className="App">
      <Switch>
		    <Route path={"/home2"} component={Home2}></Route>
		    <Route path={"/search"} component={Search}></Route>
            <Route path={"/Cinema"} component={Cinema}></Route>
		    <Route path={"/cinemaDetail"} component={CinemaDetail}></Route>
            <Route path={"/movieDetail/:movieId"} component={MovieDetail}></Route>
		    <Route path={"/citylist"} component={CityList}></Route>
        <Route path={"/movieInfo/:movieId"} component={MovieInfos}></Route>
			  <Route path={"/"}  component={Home}></Route>

      </Switch>
    </div>
  );
}

export default App;
