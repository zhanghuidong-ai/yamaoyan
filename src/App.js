import React from 'react';
import './App.css';
import "./assets/reset.css"
import {Route,Switch}  from "react-router-dom"
import Home from "./views/Home"
import 'lib-flexible'
import Login from "./views/Login";
import Order from "./views/order/MovieOrder";
import Cinema from "./views/Cinema";
import Store from "./views/order/Store";

function App() {
  return (
    <div className="App">	
		    <Route path={"/login"} component={Login}></Route>
      	<Route path={"/"}  component={Home}></Route>
        <Route path={"/order"}  component={Order}></Route>
        <Route path={"/store"}  component={Store}></Route>
    </div>
  );
}

export default App;
