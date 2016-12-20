import { TodoItemModel, TodoListModel, ItemStatus } from "../models/TodoItemModel";
import {AppDispatcher} from "./AppDispatcher";
import {EventEmitter} from "events";

class TodoStore extends EventEmitter {
    todos: Array<TodoItemModel> = []
    
    add(o: TodoItemModel) {
        this.todos.push(o);

        this.emit("change");
    }

    getList() {
        return this.todos;
    }
}


export let todoStore: any = new TodoStore();


AppDispatcher.register(payload => {
    switch(payload.eventName){
        case "ADD_ITEM":
            let item = payload.item;
            todoStore.add(item);
            break;

        default:
            return false;
    }
});