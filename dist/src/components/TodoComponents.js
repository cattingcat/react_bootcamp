"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TodoModels = require("../models/TodoItemModel");
var React = require("react");
var TodoItemComponent = (function (_super) {
    __extends(TodoItemComponent, _super);
    function TodoItemComponent() {
        return _super.call(this) || this;
    }
    TodoItemComponent.prototype.render = function () {
        var summary = this.props.item.summary;
        return (React.createElement("div", null,
            " ",
            summary,
            " "));
    };
    return TodoItemComponent;
}(React.Component));
exports.TodoItemComponent = TodoItemComponent;
var TodoListComponent = (function (_super) {
    __extends(TodoListComponent, _super);
    function TodoListComponent() {
        return _super.call(this) || this;
    }
    TodoListComponent.prototype.render = function () {
        return (React.createElement("div", null, this.props.items.map(function (i) { return React.createElement(TodoItemComponent, { item: i }); })));
    };
    return TodoListComponent;
}(React.Component));
exports.TodoListComponent = TodoListComponent;
var TodoListStateful = (function (_super) {
    __extends(TodoListStateful, _super);
    function TodoListStateful() {
        return _super.apply(this, arguments) || this;
    }
    TodoListStateful.prototype.render = function () {
        var list = [
            { summary: "task1", details: "qweqwe", status: TodoModels.ItemStatus.InProgress },
            { summary: "task2", details: "qweqwe", status: TodoModels.ItemStatus.InProgress },
            { summary: "task3", details: "qweqwe", status: TodoModels.ItemStatus.InProgress }
        ];
        return ();
    };
    return TodoListStateful;
}(React.Component));
exports.TodoListStateful = TodoListStateful;
//# sourceMappingURL=TodoComponents.js.map