import {
    createStore,
    combineReducers
} from "redux";
import rootReducer from "./reducer"
export default createStore(rootReducer)