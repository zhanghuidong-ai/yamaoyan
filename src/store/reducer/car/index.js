import initState from "../../state/car"
import carType from "../../actionType/car"
export default function (state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === carType.JOIN_CAR){
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