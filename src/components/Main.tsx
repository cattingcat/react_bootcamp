import * as React from "react";

class Main extends React.Component<any, any> {

    // React.cloneElement(this.props.children, this.props)
    //  pass props to children elements
    render() {
        return (
            <div>
                <h1> hello World </h1>
                <span>qweqwe</span>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
} 


export { Main };