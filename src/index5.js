/*******************************将要修改的数据通过payload进行传递*********************************************/
import {
    createStore
} from "redux";

// const reducer = function (state={age:12},action) {
//     state = JSON.parse(JSON.stringify(state))
//     if(action.type === "CHANGE_AGE")
//         state.age = action.payload.age;
//     return state;
// }

const reducer = function (state={age:12},{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    if(type === "CHANGE_AGE")
        state.age = payload.age;
    return state;
}
const store = createStore(reducer);
const state = store.getState();
console.log(state)
store.dispatch({
    type:"CHANGE_AGE",
    payload:{// 将荷载的数据放置到payload当中
        age:100
    }
})
console.log(store.getState())

store.dispatch({
    type:"CHANGE_AGE",
    payload:{
        age:1000
    }
})
console.log(store.getState())
