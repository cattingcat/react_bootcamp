import { TodoItemModel, TodoListModel, ItemStatus } from "../models/TodoItemModel";
import {AppDispatcher} from "./AppDispatcher";

export let TodoStore: any = {
    todos: [],
    listeners: [],

    add(o: TodoItemModel) {
        this.todos.push(o);

        this.trigger();
    },

    getList() {
        return this.todos;
    },

    subscribe(f: () => any){
        this.listeners.push(f);
    },

    trigger() {
        this.listeners.forEach((i: any) => i());
    }
}


AppDispatcher.register(payload => {
    switch(payload.eventName){
        case "ADD_ITEM":
            let item = payload.item;
            TodoStore.add(item);
            break;

        default:
            return false;
    }
});