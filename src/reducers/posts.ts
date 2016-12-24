function posts(state: Array<{id: number} & any> = [], action: {type: string} & any) {
    switch(action.type) {
        case "INC_LIKES":
        return state.map(i => i.id == action.postId ? {...i, likes: i.likes + 1} : i)
    }

    return state;
}


export default posts;