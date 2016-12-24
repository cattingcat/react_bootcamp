function comments(state: any = [], action: {type: string} & any) {
    switch(action.type){
        case "REMOVE_COMMENT":
        return state.filter((c:{id: number}) => c.id !== action.commentId);

        case "ADD_COMMENT":
        const newId = Math.round(Math.random() * 1000);
        const {text, author, postId} = action;
        const comment = {
            id: newId,
            text, author, postId
        };
        return [...state, comment];
    }

    return state;
}

export default  comments;