"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
//# sourceMappingURL=TodoItem.js.map