import login from "./login";
import city from "./city"
import The_MovieList from "./The_MovieList";
import search from "./search"
import movieDetail from "./movieDetail"
import {
    combineReducers
} from "redux";
export default combineReducers({
    login,
    search,
    city,
    The_MovieList,
    movieDetail
});