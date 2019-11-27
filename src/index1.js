/*
* 1、store与state的关系：const state = store.getState()
* 2、创建仓库时需要使用createStore方法，并将reducer函数作为参数进行传入：
*     const store = createStore(reducer);
* 3、reducer返回的内容即是你的状态值（state）
* */
import {
    createStore
} from "redux";
// 如何创建仓库？
const reducer = function () {
    return 1
}
const store = createStore(reducer);
const state = store.getState();
console.log(state)