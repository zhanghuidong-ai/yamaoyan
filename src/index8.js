/**购物车**/
import {
    createStore,
    combineReducers
} from "redux";
/*************************商品模块************************************************/
const goodsList = [
    {id:1,goodsName:"梨",goodsDetail:"千树万树梨花开",goodsPrice:12,goodsStore:31,createTime:1574216977952},
    {id:2,goodsName:"桃",goodsDetail:"在那桃花盛开的地方",goodsPrice:23,goodsStore:81,createTime:157216977952},
    {id:3,goodsName:"杏",goodsDetail:"一枝红杏出樯来",goodsPrice:56,goodsStore:16,createTime:157421697952}
]
const goodsListReducer = function (state=goodsList,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === "ADD_GOODS")
        state.push(payload);
    return state;
}
/*************************购物车模块************************************************/
const  carList = [];// [{id:xxx,goodsId:xxxxx,goodsName,goodsPrice,buyNum}]
const carListReducer = function (state=carList,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === "JOIN_CAR"){
        const carInfo = state.find(v=>v.goodsId === payload.id);
        if(carInfo){
            carInfo.buyNum++;
        }else{
            state.push({
                id:state.length+1,
                goodsId:payload.id,
                goodsName:payload.goodsName,
                goodsPrice:payload.goodsPrice,
                buyNum:1
            })
        }
    }
    return state;
}
/*****************************创建仓库***********************************************************/
const rootReducer = combineReducers({
    goods:goodsListReducer,
    car:carListReducer
})
const store = createStore(rootReducer);
let state = store.getState();
/***************************增加商品********************************************************************/
function addGoods(payload) {
    return {
        type:"ADD_GOODS",
        payload
    }
}
store.dispatch(addGoods({
    id:state.goods.length+1,
    goodsName:"葡萄",
    goodsDetail:"葡萄美酒夜光杯",
    goodsPrice:90,
    goodsStore:12,
    createTime:Date.now()-9878657
}))
state = store.getState();
// console.log(state.goods);
/***************************加入购物车*************************************************************************/
function joinCar(goodsId) {
    return {
        type:"JOIN_CAR",
        payload:state.goods.find(v=>v.id === goodsId)
    }
}
store.dispatch(joinCar(2));
store.dispatch(joinCar(2));
store.dispatch(joinCar(4));
store.dispatch(joinCar(4));
state = store.getState();
console.log(state.car);