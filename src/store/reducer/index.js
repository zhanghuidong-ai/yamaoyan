import login from "./login";
import The_MovieList from "./The_MovieList";
import search from "./search"
import {
    combineReducers
} from "redux";

export default combineReducers({
    login,
    The_MovieList,
    search
});