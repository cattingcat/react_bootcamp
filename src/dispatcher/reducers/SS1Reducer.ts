import {SomeState1, MyAction} from "../stateTypes/types"

export default function(state: SomeState1 = {text: "q"}, action: MyAction) {
    return state;
}