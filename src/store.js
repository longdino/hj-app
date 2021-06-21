import { createStore, combineReducers } from "redux";
import homePage from "./containers/HomePage/reducers";
import userPage from "./contaienrs/UserPage/reducer";

const reducers = combineReducers({ homePage, userPage });

export default createStore(reducers);