import {applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thankMiddleware from "redux-thunk"

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thankMiddleware))
);

export default store;
