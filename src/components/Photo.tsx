import * as React from "react";
import { Link } from "react-router";

class Photo extends React.Component<any, any> {
    onLike(post: {id: number}) {
        this.props.inc(post.id);
    }

    render() {
        const { post } = this.props;
        return (
            <figure>
                <Link to={`/view/${post.id}`}> 
                    <h3>{post.title}</h3> 
                    <img src={post.imgUrl} alt={post.title} width="150" height="150" />
                </Link>
                
                <div>
                    <button onClick={() => this.onLike(post)}> &hearts; {post.likes} </button>
                </div>

                <figcaption>
                    <p> Some description of post </p>
                </figcaption>
            </figure>
        );
    }
}

export {Photo};