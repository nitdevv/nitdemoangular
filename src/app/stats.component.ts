import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Todo } from './todo';
import * as _  from 'lodash';


@Component({
    selector: 'my-header',
    template: `
    <nav class="navbar navbar-default">
  <div class="container-fluid">

    <div class="navbar-header">
        <button role="group" class="btn btn-default" type="button">
 	  All <span class="badge"> {{done(todos)}}{{NoTodos}}</span>
 	</button>
        <button role="group" class="btn btn-default" type="button">
 	  Todo <span class="badge">{{to_do.length}}</span>
 	</button>
 	<button role="group" class="btn btn-default" type="button">
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

    ngOnChanges(changes) {
      this.NoTodos = _.size(changes.todos.currentValue);

    }
    ngOnInit() {

    }
    done(todos) {
        this.to_do = _.filter(this.todos, { 'complete': false });
        this.done_todo = _.filter(this.todos, { 'complete': true })
    }

}
