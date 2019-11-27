/*
* reducer 当中不允许出现异步操作*/
/*******************************通过工厂模式生成action*********************************************/
import {
    createStore
} from "redux";
const reducer = function (state={age:12},{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    if(type === "CHANGE_AGE")
        state.age = payload.age;
    return state;
}
const store = createStore(reducer);
const state = store.getState();
/*******************************************************************************/
function changeAge(age) {
    return {
        type:"CHANGE_AGE",
        payload:{
            age
        }
    }
}
store.dispatch(changeAge(10000));
console.log(store.getState())
store.dispatch(changeAge(555));
console.log(store.getState())
