import { TodoItemModel, TodoListModel, ItemStatus } from "../models/TodoItemModel";
import {AppDispatcher} from "../dispatcher/AppDispatcher";

export let TodoEventFactory = {
    add(i: TodoItemModel) {
        AppDispatcher.dispatch({
            eventName: "ADD_ITEM",
            item: i
        });
    }
};