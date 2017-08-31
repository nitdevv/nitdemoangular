import { Component, OnInit, OnChanges, Input } from '@angular/core'
import { Todo } from '../todo.data/todo';
import { HeroService } from '.todo.services';
import { Router } from '@angular/router-deprecated';
@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component/dashboard.component.html',
    styleUrls: ['app/css/dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnChanges {
    todos: Todo[] = [];
    fType: string;
    show_todo: boolean;
    constructor(
        private _router: Router,
        private _HeroService: HeroService
    ) { }
    ngOnChanges(changes) {
    }
    ngOnInit() {
        this._HeroService.getHeroes()
            .then(todos => {
                this.todos = todos

            });
    }
    gotoDetail(todo: Todo) {
        let link = ['Edit', { id: todo.id }];
        this._router.navigate(link);
    }
    showT(todo:Todo){
    }
}
