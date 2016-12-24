import * as React from "react";

import {Comment} from "./Comment";
import {CommentForm} from "./CommentForm";

class ImageView extends React.Component<any, any> {
    onLike(post: {id: number}) {
        this.props.inc(post.id);
    }

    onRemoveComment(postId: number, commentId: number) {
        this.props.removeComment(postId, commentId);
    }

    onAddComment(postId: number, commentObj: any) {
        const comment = {
            ...commentObj,
            postId
        };

        this.props.addComment(comment);
    }

    render() {
        const postId = +(this.props.params.postId);
        const post = this.props.posts.find((i: any) => i.id === postId);
        const relatedComments = this.props.comments.filter((i: any) => i.postId === postId)

        return (
            <div>
                <div className="post-info">
                    <figure>
                        <h3>{post.title}</h3> 
                        <img src={post.imgUrl} alt={post.title} width="150" height="150" />
                        
                        <div>
                            <button onClick={() => this.onLike(post)}> &hearts; {post.likes} </button>
                        </div>

                        <figcaption>
                            <p> Some description of post </p>
                        </figcaption>
                    </figure>
                </div>
                <div className="comments">
                    {relatedComments.map((c: any) => <Comment comment={c} onRemoveComment={()=> this.onRemoveComment(postId, c.id)} />)}
                    <CommentForm submit={(commentObj: any) => this.onAddComment(postId, commentObj)} />
                </div>
            </div>
        );
    }
} 


export { ImageView };