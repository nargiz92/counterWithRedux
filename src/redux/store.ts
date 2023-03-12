import {combineReducers, createStore} from "redux";
import {CounterReducer} from "./CounterReducer";

export type AppRootStateType=ReturnType<typeof rootReducer >
const rootReducer=combineReducers({
    counter:CounterReducer
})
export const store=createStore(rootReducer)
// @ts-ignore
window.store=store;