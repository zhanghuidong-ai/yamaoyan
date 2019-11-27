/*
* 1、每一个项目只允许有一个store.
* 2、每一个store允许有多个reducer.每一个reducer可以认为是你的一个模块。
* // 作业：模仿着修改age,尝试修改num
* */
import {
    createStore,
    combineReducers// 将多个reducer合并成一个
} from "redux";
const reducerOne = function (state={age:1},{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type==="CHANGE_AGE")
        state.age = payload.age;
    return state;
}
const reducerTwo = function (state={num:2},{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    return state;
}
const rootReducer = combineReducers({
    one:reducerOne,
    two:reducerTwo
});
const store = createStore(rootReducer);
console.log(store.getState());
function changeAge(age) {
    return {
        type:"CHANGE_AGE",
        payload:{
            age
        }
    }
}
function changeNum(num) {
    return {
        type:"CHANGE_NUM",
        payload:{
            num
        }
    }
}
store.dispatch(changeAge(100))
console.log(store.getState());//