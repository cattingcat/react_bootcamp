import {bindActionCreators} from "redux";
import {connect} from "react-redux";

// My action creator that return pure objects
import * as creators from "../actions/actionCreators";

// My main component. We need to pass state to this component
import {Main} from "./Main";



function mapStateToProps(state: any) {
    return {
        posts: state.posts,
        comments: state.comments
    };
}

function mapDispatchToProps(dispatch: any) {
    let tmp: {[key: string]: any} = creators;
    // binders will call dispatch(actionCreator())
    let binding = bindActionCreators(tmp, dispatch);
    return binding;
}

// Wrapper factory
// state -> props
// dispatch -> props
const connectFunc = connect(mapStateToProps, mapDispatchToProps);

// Create wrapper that will pass properties
const App = connectFunc(Main);

export {App};