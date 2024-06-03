import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers, createStore, compose } from "redux";
import counterReducer from "./Features/Counter/reducer";

// let rootReducers =combineReducers({
//     counter : counterReducer
// });

// const composeEnhancers = window.__REDUX_DEVTOOL_EXTENTION_COMPOSE__ || compose;
// let store = createStore(rootReducers, composeEnhancers());

const store = configureStore({ reducer: counterReducer });
export default store;
