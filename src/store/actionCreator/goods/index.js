import goodsType from "../../actionType/goods"
export function addGoods(payload) {
    return {
        type:goodsType.ADD_GOODS,
        payload
    }
}