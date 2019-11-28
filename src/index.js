import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/style/css/reset.css"
import "./assets/font_icon/iconfont.css"
import App from './App';
import 'lib-flexible'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"
import tools from "./tools"
React.Component.prototype.$tools = tools

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
