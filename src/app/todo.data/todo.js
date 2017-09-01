"use strict";
var Todo = (function () {
    function Todo(id, name, active, complete) {
        if (active === void 0) { active = false; }
        if (complete === void 0) { complete = false; }
        this.id = id;
        this.name = name;
        this.active = active;
        this.complete = complete;
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map