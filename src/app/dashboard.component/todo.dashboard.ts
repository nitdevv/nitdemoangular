import { Component, OnInit, OnChanges, Input } from '@angular/core'

import { Todo } from '../todo.data/todo';
import { HeroService } from '../services/todo.service';
import {Router} from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { TodDetailComponent } from '../stats.component';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnChanges {
    todos: Todo[] = [];
    nameType: string;
    show_todo: boolean;
    constructor(
        private HeroService: HeroService,
        private router:Router
    ) { }
    ngOnChanges(changes) {
    }
    ngOnInit() {
        this.HeroService.getHeroes()
            .then(todos => {
                this.todos = todos
            });
    }

    gotoDetail(todo: Todo) {
     let link = ['Edit', { id: todo.id }];
     this.router.navigate(['/edit',todo.id]);
 }
    addTodo() {
        let link = ['Edit'];
        this.router.navigate(['/edit']);

    }
    complete(event:any,todo:Todo){
      if(event===true){
        todo.active=false;
        todo.complete=true;
      }
      else{
        todo.active=true;
        todo.complete=false;
      }
    }
    showT(todo:Todo){
    }
}
