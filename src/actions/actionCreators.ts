// just function that create event objects

// Inc likes
function inc(id: number) {
    return {
        type: "INC_LIKES",
        postId: id
    };
}

// add comments
function addComment(comment: any) {
    return {
        type: "ADD_COMMENT",
        ...comment
    };
}

// remove comment
function removeComment(postId: number, commentId: number) {
    return {
        type: "REMOVE_COMMENT",
        postId,
        commentId
    };
}

export { inc, addComment, removeComment }; 