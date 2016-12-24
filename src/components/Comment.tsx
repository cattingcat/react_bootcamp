import * as React from "react";

class Comment extends React.Component<any, any> {
    onRemoveComment(commentId: number) {
        this.props.onRemoveComment(commentId);
    }

    render() {
        const comment = this.props.comment;
        return (
            <div className="comment-clock">
                <strong> {comment.author} </strong>
                <span> {comment.text} </span>
                <button onClick={() => this.onRemoveComment(comment.id)}>x</button>
            </div>
        );
    }
}

export {Comment};