import React from 'react';
import './App.css';
import "./assets/reset.css"
import {Route,Switch}  from "react-router-dom"
import Home from "./views/Home"
// import My from "./views/My";
import Login from "./views/Login";
// import Cinema from "./views/Cinema";
// 123123123
function App() {
  return (
    <div className="App">	
      <Switch>
		<Route path={"/login"} component={Login}></Route>
      	<Route path={"/"}  component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
