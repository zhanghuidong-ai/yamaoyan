import store from './store';
import {addGoods} from "./store/actionCreator/goods";
import {joinCar} from "./store/actionCreator/car";

let state = store.getState();
store.dispatch(addGoods({
    id:state.goods.length+1,
    goodsName:"葡萄",
    goodsDetail:"葡萄美酒夜光杯",
    goodsPrice:90,
    goodsStore:12,
    createTime:Date.now()-9878657
}))
state = store.getState();

store.dispatch(joinCar(state.goods.find(v=>v.id===1)));
store.dispatch(joinCar(state.goods.find(v=>v.id===1)));
console.log(store.getState())

