import { Component, Input, OnInit, OnChanges Output,EventEmitter } from '@angular/core';
import { Todo } from './todo';
import * as _  from 'lodash';


@Component({
    selector: 'my-header',
    templateUrl: ./stats.component.html'
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
