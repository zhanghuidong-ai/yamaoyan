import {combineReducers} from "redux";
import goods from "./goods";
import car from './car'
const rootReducer = combineReducers({
    goods,
    car
})
export default rootReducer;