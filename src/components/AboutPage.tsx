import * as React from "react";
import { Link } from "react-router";

class AboutPage extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h2> About </h2>
                <ul>
                    <li>
                        <Link to="/grid"> Grid </Link>
                    </li>
                    <li>
                        <Link to="/view/qwe"> View qwe </Link>
                    </li>
                </ul>
            </div>
        );
    }
} 


export { AboutPage };