import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import posts from "./posts"
import comments from "./comments";

// Creating composition of reducers
//  each reducer binds for one property of state
const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;