import { Component, OnInit, OnChanges, Input } from '@angular/core'

import { Todo } from '../todo.data/todo';
import { HeroService } from '../services/todo.service';
import {Router} from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpModule }    from '@angular/http';
@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnChanges {
    todos: Todo[] = [];
    nametype: string;
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
        console.log('hii');
        this.router.navigate(['/edit']);
        console.log('yoo');

    }
    showT(todo:Todo){
    }
}

