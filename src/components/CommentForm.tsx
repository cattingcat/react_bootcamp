import * as React from "react";

class CommentForm extends React.Component<any, any> {
    authorEl: HTMLInputElement
    commentEl: HTMLInputElement

    onSubmit () {
        this.props.submit({
            author: this.authorEl.value,
            text: this.commentEl.value
        });
    }

    render() {
        return (
            <div className="comment-form">
        <input type="text" placeholder="author" ref={(el:any) => this.authorEl = el} />
                <input type="text" placeholder="comment" ref={(el:any) => this.commentEl = el} />
                <input type="button" title="Add comment" onClick={() => this.onSubmit()}/>
            </div>
        );
    }
}


export {CommentForm};