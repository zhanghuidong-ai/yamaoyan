/*
* 1、在创建仓库时，reducer会执行。接收的参数有两个分别为state,action.
* 2、状态不允许直接修改。只有通过dispatch方法执行action才是操作state的正途*/
import {
    createStore// 创建仓库，需要使用reducer函数
} from "redux";
const initState = {
    sex:"男"
}
const reducer = function (state=initState,action) {
    console.log(11111111)
    state = JSON.parse(JSON.stringify(state))
    return state;
}
const store = createStore(reducer);
const state = store.getState();
state.sex = "女";
console.log(state);
console.log(store.getState())
console.log(initState)