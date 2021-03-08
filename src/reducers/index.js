// import externally
import { combineReducers } from "redux";

//import locally
import searchReducer from "./searchReducer";
import authorReducer from "./authorReducer";
import setDateReducer from "./setDateReducer";

const AppReducer = combineReducers({
    searchReducer,
    authorReducer,
    setDateReducer,
});
export default AppReducer;
