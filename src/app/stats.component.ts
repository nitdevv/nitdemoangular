import { Component, Input, OnInit, OnChanges Output,EventEmitter } from '@angular/core';
import { Todo } from './todo';
import * as _  from 'lodash';


@Component({
    selector: 'my-header',
    template: `
    <nav class="navbar navbar-default">
  <div class="container-fluid">

    <div class="navbar-header">
        <button role="group" class="btn btn-default" type="button" (click)="filterTodo('all')">
 	  All <span class="badge"> {{done(todos)}}{{NoTodos}}</span>
 	</button>
        <button role="group" class="btn btn-default" type="button" (click)="filterTodo('todoT')">
 	  Todo <span class="badge">{{to_do.length}}</span>
 	</button>
 	<button role="group" class="btn btn-default" type="button"(click)="filterTodo('doneT')">
	  Done <span class="badge">{{done_todo.length}}</span>
	</button>
</div>
  </div>
</nav>
  `
})
export class StatsComponent implements OnInit, OnChanges {
    @Input() todos: Todo[];
    to_do: Todo[];
    done_todo: Todo[];
    NoTodos: number;
    @Output('filterChange') filters = new EventEmitter();


    ngOnChanges(changes) {
      this.NoTodos = _.size(changes.todos.currentValue);
      this.done(this.todos);

    }
    ngOnInit() {
      this.done(this.todos);

    }
    done(todos) {
        this.to_do = _.filter(this.todos, { 'complete': false });
        this.done_todo = _.filter(this.todos, { 'complete': true })
    }
    filterTodo(val){
        this.filters.emit(val);
    }

}
