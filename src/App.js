import React from 'react';
import './App.css';
import "./assets/reset.css"
import {Route,Switch}  from "react-router-dom"
import Home from "./views/Home"
import My from "./views/My";
// import Cinema from "./views/Cinema";

function App() {
  return (
    <div className="App">	
      <Switch>
		<Route path={"/login"} component={My}></Route>
      	<Route path={"/"}  component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
