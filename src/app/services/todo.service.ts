import { Component, OnInit } from '@angular/core'
import { Todo } from '../todo.data/todo';
import { TODOS } from '../todo.data/todo.data';
import { Injectable } from '@angular/core';
import * as _  from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { jsonData } from '../data/datajson';


@Injectable()
export class HeroService {
    _url: string = jsonData.url;
    todo:Todo;
    todos: Todo[] = [];
    Data:any;

    constructor(private http: Http) { }

    getHeroes():Observable<Todo[]> {
    if(this.data)
        return Observable.of(this.todos);
    }
    else{
    return this.http.get(this._url)
    .map((response:Response)=>{
    this.Data=response.json();
    return response.json();
    })
    }
    getdetail(id: number):Observable<Todo> {
        return this.getHeroes().map(
            todos => todos.filter(todo => todo.id === id)[0]
    )};
    editData(value: Todo) {
        this.todos = _.map(this.todos, (todo) => {
            return todo;
        });
    }
    addTodo(value:Todo){
        this.Data.push(value);

    }
}
