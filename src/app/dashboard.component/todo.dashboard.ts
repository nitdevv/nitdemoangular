import { Component, OnInit, OnChanges, Input } from '@angular/core'
import { Todo } from '../todo.data/todo';
import { HeroService } from '../services/todo.service';
import {ActivatedRoute} from '@angular/router';

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
        private router:ActivatedRoute,
        private _HeroService: HeroService
    ) { }
    ngOnChanges(changes) {
    }
    ngOnInit() {
        this._HeroService.getHeroes()
            .then(todos => {
                this.todos = todos

            });
             console.log(this.todos);
    }
    // gotoDetail(todo: Todo) {
    //     let link = ['Edit', { id: todo.id }];
    //     this.router.navigate(['/edit']);
    // }
    gotoDetail(todo:Todo){

    }
    showT(todo:Todo){
    }
}
