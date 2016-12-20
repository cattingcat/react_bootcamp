import {Reducer, Action, createStore, combineReducers} from "redux";


export interface MyAction extends Action {
    payload: any
}

export interface SomeState1 {
    text: string
}

export interface SomeState2 {
    i: number
}

export interface MyState {
    ss1: SomeState1
    ss2: SomeState2
}