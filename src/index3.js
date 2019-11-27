/*
* 1、修改数据状态唯一的方法是通过dispatch，dispatch是一个函数,需要给予该函数一个action
* 2、action是一个对象，该对象必须要有type属性，type用于判断你的行为类别
* 3、建议action的type值采用大写*/
import {
    createStore
} from "redux";
/********************创建reducer*****************************************/
const initState = {
    userName:"laoli"
}
// state:当你执行dispatch时，state是上一次你最终操作的状态
const reducer = function (state=initState,action) {
    state = JSON.parse(JSON.stringify(state))
    if(action.type === "CHANGE_USER_NAME")
        state.userName = "laotie"
    return state;
}
/**********************创建仓库****************************************************/
const store = createStore(reducer);
/**********************获得当前的状态************************************************************/
const state = store.getState();
/**********************通过dispatch执行action************************************************************/
store.dispatch({
    type:"CHANGE_USER_NAME"
})
console.log(state);
const state2 = store.getState();
console.log(state === state2);
console.log(state2)



