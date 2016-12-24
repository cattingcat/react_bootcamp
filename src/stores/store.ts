// redux
import { createStore, compose } from "redux";

// redux with history API (react-history)
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";


// Root reducer
import rootReducer from "../reducers";

// data stub
import posts from "../data/posts";
import comments from "../data/comments";


// default data
const defaultState = {
    posts, comments
};


export const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);