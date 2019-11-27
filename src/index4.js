/*
* 1、若要修改数据，只能通过action,而要执行action只能通过dispatch
* 2、reducer的执行：
*       1、在创建仓库时会执行
*           createStore(reducer)
*       2、在你运行dispatch时会执行
* 3、reducer执行时，得到的state是最后一次的状态值。
* 4、dispatch是store下的一个方法。
* */
import {
    createStore
} from "redux";

const reducer = function (state={age:12},action) {
    state = JSON.parse(JSON.stringify(state))
    if(action.type === "CHANGE_AGE")
        state.age = 13;
    return state;
}
const store = createStore(reducer);
const state = store.getState();
console.log(state)
store.dispatch({
    type:"CHANGE_AGE"
})
console.log(store.getState())

