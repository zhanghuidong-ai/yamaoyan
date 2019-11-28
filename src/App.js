import React from 'react';
import './App.css';
<<<<<<< HEAD
import "./assets/style/reset.css"
import "./assets/style/home2.css"
import {Route,Switch}  from "react-router-dom"
import Home from "./views/Home"
// import My from "./views/My";
import Home2 from "./views/Home2";
=======
import "./assets/style/css/reset.css"
import "./assets/font_icon/iconfont.css"
import {Route,Switch}  from "react-router-dom"
import Home from "./views/Home"
// import My from "./views/My";
import Login from "./views/Login";
import Search from "./components/Search"
>>>>>>> bfd45ba719734c882ab02e14fa778ba14b49b336
// import Cinema from "./views/Cinema";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">	
      <Switch>
		<Route path={"/home2"} component={Home2}></Route>
=======
    <div className="App">
      <Switch>
		    <Route path={"/login"} component={Login}></Route>
		    <Route path={"/search"} component={Search}></Route>
>>>>>>> bfd45ba719734c882ab02e14fa778ba14b49b336
      	<Route path={"/"}  component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
