import * as React from "react";

import {Photo} from "./Photo";

class ImageGrid extends React.Component<any, any> {
    render() {
        return (
            <div>
                {this.props.posts.map((i:any) => <Photo {...this.props} key={i.id} post={i} />)}
            </div>
        );
    }
} 


export { ImageGrid };