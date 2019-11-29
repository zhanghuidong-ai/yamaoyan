import login from "./login";
import search from "./search"
import {
    combineReducers
} from "redux";

export default combineReducers({
    login,
    search
});