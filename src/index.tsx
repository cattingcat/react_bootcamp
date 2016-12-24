// Base react imports 
import * as React from "react";
import * as ReactDOM from "react-dom";

// React Router
import { Router, Route, IndexRoute } from "react-router";

// Redux
import { Provider } from "react-redux";

// Custom components
import { App } from "./components/App";
import { ImageGrid } from "./components/ImageGrid"; 
import { ImageView } from "./components/ImageView"; 
import { AboutPage } from "./components/AboutPage";

// store
import {history, store} from "./stores/store";

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}> 
                <IndexRoute component={AboutPage}/>
                <Route path="/grid" component={ImageGrid} />
                <Route path="/view/:postId" component={ImageView} />
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(
    router,
    document.getElementById("example")
);
