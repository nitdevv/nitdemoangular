import { Component, OnInit } from '@angular/core'
import { Todo } from '../todo.data/todo';
import { TODOS } from '../todo.data/todo.data';
import { Injectable } from '@angular/core';
import * as _  from 'lodash';
@Injectable()
export class HeroService {
    todos: Todo[] = TODOS;
    getHeroes() {
        return Promise.resolve(this.todos);
    }
    getdetail(id: number) {
        return Promise.resolve(TODOS).then(
            todos => todos.filter(todo => todo.id === id)[0]
    )};
    editData(value: Todo) {
        this.todos = _.map(this.todos, (todo) => {
            return todo;
        });
    }
    addTodo(value:Todo){
        this.todos.push(value);

    }
}
