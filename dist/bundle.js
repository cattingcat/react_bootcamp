/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Hello_1 = __webpack_require__(3);
	var MyModel_1 = __webpack_require__(10);
	var m = new MyModel_1.Foo();
	m.test();
	ReactDOM.render(React.createElement(Hello_1.Hello, { compiler: "TypeScript", framework: "React" }), document.getElementById("example"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var TodoComponents_1 = __webpack_require__(4);
	// 'HelloProps' describes the shape of props.
	// State is never set so we use the 'undefined' type.
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
	            React.createElement(TodoComponents_1.TodoListStateful, null)));
	    };
	    return Hello;
	}(React.Component));
	exports.Hello = Hello;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var TodoItemModel_1 = __webpack_require__(5);
	var TodoStore_1 = __webpack_require__(6);
	var TodoEventFactory_1 = __webpack_require__(9);
	var React = __webpack_require__(1);
	var TodoItemComponent = (function (_super) {
	    __extends(TodoItemComponent, _super);
	    function TodoItemComponent() {
	        return _super.apply(this, arguments) || this;
	    }
	    TodoItemComponent.prototype.render = function () {
	        var item = this.props.item;
	        return (React.createElement("div", null,
	            React.createElement("h4", null,
	                " ",
	                item.summary,
	                " "),
	            React.createElement("span", null,
	                " ",
	                item.status,
	                " "),
	            React.createElement("span", null,
	                " ",
	                item.details,
	                " ")));
	    };
	    return TodoItemComponent;
	}(React.Component));
	var TodoListMenu = (function (_super) {
	    __extends(TodoListMenu, _super);
	    function TodoListMenu() {
	        var _this = _super.call(this) || this;
	        _this.onAdd = _this.onAdd.bind(_this);
	        return _this;
	    }
	    TodoListMenu.prototype.onAdd = function () {
	        var todoItem = {
	            summary: this.summaryEl.value,
	            details: this.detailsEl.value,
	            status: TodoItemModel_1.ItemStatus.Open
	        };
	        TodoEventFactory_1.TodoEventFactory.add(todoItem);
	    };
	    TodoListMenu.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", null,
	            React.createElement("div", null,
	                React.createElement("label", { htmlFor: "summary" }, " Summary: "),
	                React.createElement("input", { type: "text", id: "summary", ref: function (e) { return _this.summaryEl = e; } })),
	            React.createElement("div", null,
	                React.createElement("label", { htmlFor: "details" }, " Details: "),
	                React.createElement("input", { type: "text", id: "details", ref: function (e) { return _this.detailsEl = e; } })),
	            React.createElement("button", { onClick: this.onAdd }, " Add ")));
	    };
	    return TodoListMenu;
	}(React.Component));
	var TodoListComponent = (function (_super) {
	    __extends(TodoListComponent, _super);
	    function TodoListComponent() {
	        return _super.apply(this, arguments) || this;
	    }
	    TodoListComponent.prototype.render = function () {
	        return (React.createElement("div", null,
	            React.createElement("h3", null, " ToDo list component "),
	            this.props.items.map(function (i) { return React.createElement(TodoItemComponent, { item: i }); })));
	    };
	    return TodoListComponent;
	}(React.Component));
	var TodoListStateful = (function (_super) {
	    __extends(TodoListStateful, _super);
	    function TodoListStateful() {
	        var _this = _super.call(this) || this;
	        _this.state = { items: [] };
	        return _this;
	    }
	    TodoListStateful.prototype.componentDidMount = function () {
	        var _this = this;
	        TodoStore_1.TodoStore.subscribe(function () {
	            _this.setState({ items: TodoStore_1.TodoStore.getList() });
	        });
	    };
	    TodoListStateful.prototype.render = function () {
	        return (React.createElement("div", null,
	            React.createElement(TodoListMenu, null),
	            React.createElement(TodoListComponent, { items: this.state.items })));
	    };
	    return TodoListStateful;
	}(React.Component));
	exports.TodoListStateful = TodoListStateful;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var ItemStatus;
	(function (ItemStatus) {
	    ItemStatus[ItemStatus["Open"] = 0] = "Open";
	    ItemStatus[ItemStatus["InProgress"] = 1] = "InProgress";
	    ItemStatus[ItemStatus["Done"] = 2] = "Done";
	})(ItemStatus || (ItemStatus = {}));
	exports.ItemStatus = ItemStatus;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AppDispatcher_1 = __webpack_require__(7);
	exports.TodoStore = {
	    todos: [],
	    listeners: [],
	    add: function (o) {
	        this.todos.push(o);
	        this.trigger();
	    },
	    getList: function () {
	        return this.todos;
	    },
	    subscribe: function (f) {
	        this.listeners.push(f);
	    },
	    trigger: function () {
	        this.listeners.forEach(function (i) { return i(); });
	    }
	};
	AppDispatcher_1.AppDispatcher.register(function (payload) {
	    switch (payload.eventName) {
	        case "ADD_ITEM":
	            var item = payload.item;
	            exports.TodoStore.add(item);
	            break;
	        default:
	            return false;
	    }
	});


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var flux_1 = __webpack_require__(8);
	var AppDispatcher = new flux_1.Dispatcher();
	exports.AppDispatcher = AppDispatcher;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = Flux;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AppDispatcher_1 = __webpack_require__(7);
	exports.TodoEventFactory = {
	    add: function (i) {
	        AppDispatcher_1.AppDispatcher.dispatch({
	            eventName: "ADD_ITEM",
	            item: i
	        });
	    }
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	var Color;
	(function (Color) {
	    Color[Color["Red"] = 0] = "Red";
	    Color[Color["Green"] = 1] = "Green";
	    Color[Color["Blue"] = 2] = "Blue";
	})(Color = exports.Color || (exports.Color = {}));
	;
	var Foo = (function () {
	    function Foo() {
	    }
	    Foo.prototype.foo = function () {
	        var b = false;
	        var n = 0;
	        var s = "asdasd";
	        var l = [1, 2, 3];
	        var t = [1, "sdf"];
	        var color = Color.Red;
	        var a = "qweqwe";
	        a = 5;
	        a = false;
	        b = a;
	        var v = undefined; // or null
	    };
	    // unreachable endpoint for never function
	    Foo.prototype.neverFoo = function () {
	        throw new Error("asdasd");
	    };
	    Foo.prototype.test = function () {
	        var arr = ["asdasd", "zxczxc"];
	        this.destruct([11, "sdfsdf"]);
	        this.destructArr(["f", "sdfsdf"].concat(arr, ["l"]));
	        this.testObj({ a: 55 });
	        console.log("this foos");
	        this.thisFoo1();
	        this.thisFoo2();
	    };
	    Foo.prototype.destruct = function (t) {
	        var a = t[0], b = t[1];
	        console.log(a, b);
	    };
	    Foo.prototype.destructArr = function (arr) {
	        var f = arr[0], r = arr.slice(1);
	        console.log(f, r);
	    };
	    Foo.prototype.testObj = function (o) {
	        console.log(o);
	    };
	    Foo.prototype.thisFoo1 = function () {
	        console.log(this);
	    };
	    Foo.prototype.thisFoo2 = function () {
	        console.log(this);
	    };
	    return Foo;
	}());
	exports.Foo = Foo;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map