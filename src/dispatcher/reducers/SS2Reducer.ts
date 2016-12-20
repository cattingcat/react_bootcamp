import {SomeState2, MyAction} from "../stateTypes/types"

export default function(state: SomeState2 = {i: 0}, action: MyAction) {
    switch(action.type){
        case "INC": return { i: state.i + 1 };
    }
    return state;
}