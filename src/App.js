import React from 'react';
import './App.css';
import "./assets/style/reset.css"
import "./assets/style/home2.css"
import {Route,Switch}  from "react-router-dom"
import Home from "./views/Home"
// import My from "./views/My";
import Home2 from "./views/Home2";
import "./assets/font_icon/iconfont.css"
// import My from "./views/My";
import Search from "./components/Search"
// import Cinema from "./views/Cinema";

function App() {
  return (
    <div className="App">
      <Switch>
		    <Route path={"/home2"} component={Home2}></Route>
		    <Route path={"/search"} component={Search}></Route>
			<Route path={"/"}  component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
