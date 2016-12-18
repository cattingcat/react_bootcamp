import { TodoItemModel, TodoListModel, ItemStatus } from "../models/TodoItemModel";
import {TodoStore} from "../dispatcher/TodoStore";
import {TodoEventFactory} from "../dispatcher/TodoEventFactory";
import * as React from "react";

type TodoItem = { item: TodoItemModel };
type TodoList = { items: TodoListModel };

class TodoItemComponent extends React.Component<TodoItem, any> {
  render() {
    let item: TodoItemModel = this.props.item;
    return (
      <div>
        <h4> {item.summary} </h4>
        <span> {item.status} </span>
        <span> {item.details} </span>
      </div>
    );
  }
}

class TodoListMenu extends React.Component<any, any> {
  private summaryEl: HTMLInputElement
  private detailsEl: HTMLInputElement

  constructor() {
    super();
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    let todoItem: TodoItemModel = {
      summary: this.summaryEl.value,
      details: this.detailsEl.value,
      status: ItemStatus.Open
    };

    TodoEventFactory.add(todoItem);
  }
  
  render() {
    return (
      <div>
        <div>
          <label htmlFor="summary"> Summary: </label>
          <input type="text" id="summary" ref={e => this.summaryEl = e} />
        </div>

        <div>
          <label htmlFor="details"> Details: </label>
          <input type="text" id="details" ref={e => this.detailsEl = e} />
        </div>

        <button onClick={this.onAdd}> Add </button>
      </div>
    );
  }
}

class TodoListComponent extends React.Component<TodoList, any> {
  render() {
    return (
      <div>
        <h3> ToDo list component </h3>
        { this.props.items.map(i => <TodoItemComponent item={i} />) }
      </div>
    );
  }
}

export class TodoListStateful extends React.Component<any, TodoList>  {
  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    TodoStore.subscribe(() => {
      this.setState({items: TodoStore.getList()});
    });
  }

  render() {
    return (
      <div>
        <TodoListMenu />
        <TodoListComponent items={this.state.items} />
      </div>
    );
  }
}
