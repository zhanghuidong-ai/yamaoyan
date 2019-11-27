import initState from "../../state/goods";
import goodsType from "../../actionType/goods"
export default function (state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === goodsType.ADD_GOODS)
        state.push(payload);
    return state;
}