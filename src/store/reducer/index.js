import login from "./login";
import search from "./search"
import city from "./city"
import {
    combineReducers
} from "redux";

export default combineReducers({
    login,
    search,
    city
});