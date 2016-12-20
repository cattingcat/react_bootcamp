import {Reducer, Action, createStore, combineReducers} from "redux";
import {MyState} from "./stateTypes/types";
import * as reducers from "./reducers";

let MyReducer: Reducer<MyState> = combineReducers<MyState>(<any>reducers);

export let reduxStore = createStore(MyReducer, {
    ss1:{text: ""}, 
    ss2: {i: 0}
});


reduxStore.subscribe(() => {
    console.log(reduxStore.getState());
});
