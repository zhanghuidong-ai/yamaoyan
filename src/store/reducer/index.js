import login from "./login";
import search from "./search"
import city from "./city"
import {
    combineReducers
} from "redux";
import The_MovieList from "./The_MovieList";
export default combineReducers({
    login,
    search,
    city,
    The_MovieList,
});