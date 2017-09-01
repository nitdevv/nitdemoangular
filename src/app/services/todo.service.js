"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var todo_data_1 = require('../todo.data/todo.data');
var core_1 = require('@angular/core');
var _ = require('lodash');
var HeroService = (function () {
    function HeroService() {
        this.todos = todo_data_1.TODOS;
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(this.todos);
    };
    HeroService.prototype.getdetail = function (id) {
        return Promise.resolve(todo_data_1.TODOS).then(function (todos) { return todos.filter(function (todo) { return todo.id === id; })[0]; });
    };
    ;
    HeroService.prototype.editData = function (value) {
        this.todos = _.map(this.todos, function (todo) {
            return todo;
        });
    };
    HeroService.prototype.addTodo = function (value) {
        this.todos.push(value);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=todo.service.js.map