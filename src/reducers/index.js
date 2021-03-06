import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import reposReducer from "./reposReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const rootReducers = combineReducers({
    repos: reposReducer,
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))