"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        var _this = _super.call(this) || this;
        _this.ctrls = {};
        _this.state = { isOptionsShown: false };
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    Hello.prototype.onClick = function () {
        this.setState({ isOptionsShown: !this.state.isOptionsShown });
        console.log(this.ctrls.opts);
    };
    Hello.prototype.render = function () {
        var _this = this;
        var additionalClass = this.state.isOptionsShown ? "someClass" : "";
        var model = {};
        return (React.createElement("div", null,
            React.createElement("div", { className: "options " + additionalClass, ref: function (s) { return _this.ctrls.opts = s; } }, " opts "),
            React.createElement("button", { onClick: this.onClick }, " Click me "),
            React.createElement("h1", null,
                "Hello from ",
                this.props.compiler,
                " and ",
                this.props.framework,
                "!"),
            ";"));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=Hello.js.map