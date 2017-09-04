import { Component, OnInit } from '@angular/core'
import { Todo } from '../todo.data/todo';
import { HeroService } from '../services/todo.service';
import {Router} from '@angular/router';
import { Params } from '@angular/router';
import * as _ from 'lodash';
@Component({
    selector: 'edit-component',
    templateUrl: './edit.component.html',
    styleUrls: ['../dashboard.component.css']
})
export class EditComponent implements OnInit {
    todo: Todo[] = [];
    edit:Boolean;
    constructor(
        private _router: Router,
        private _HeroService: HeroService,
        // private _routeParams: RouteParams

    ) { }
    editdata(selected: Todo) {
        this._HeroService.editData(selected);
        this._router.navigate(['Dashboard']);
    }
    ngOnInit() {
        // let id = +this._routeParams.get('id');
        let id;
        if (id) {
            this.edit = true;
            this._HeroService.getHeroes()
                .then(todo=> {
                    this.todo = todo

                });
        }
        else {
            this.edit = false;
        }
    }

}
