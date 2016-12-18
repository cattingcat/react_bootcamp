import * as React from "react";
import {TodoListStateful} from "./TodoComponents";
import * as TodoModel from "../models/TodoItemModel";

export interface HelloProps {
  compiler: string;
  framework: string;
}

interface HelloState {
  isOptionsShown: boolean;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, HelloState> {
  ctrls: {
    opts?: any
  } = {};

  constructor() {
    super();
    this.state = { isOptionsShown: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick(this: Hello): void {
    this.setState({ isOptionsShown: !this.state.isOptionsShown });
    console.log(this.ctrls.opts);
  }

  render() {
    let additionalClass: string = this.state.isOptionsShown ? "someClass" : "";
    let model = {}
    return (
      <div>
        <div className={"options " + additionalClass} ref={ s => this.ctrls.opts = s }> opts </div>
        <button onClick={this.onClick}> Click me </button>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>

        <TodoListStateful />
      </div>
    );
  }
}
