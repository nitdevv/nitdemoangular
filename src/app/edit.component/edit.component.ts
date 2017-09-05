import { Component, OnInit } from '@angular/core'
import { Todo } from '../todo.data/todo';
import { HeroService } from '../services/todo.service';
import {Router} from '@angular/router';
import { Params } from '@angular/router';

import {ActivatedRoute} from '@angular/router';
import { Location }  from '@angular/common';
import * as _ from 'lodash';
@Component({
    selector: 'edit-component',
    templateUrl: './edit.component.html',
    styleUrls: ['../dashboard.component.css'],
  })
export class EditComponent implements OnInit {
    todo: Todo[] = [];
    edit:Boolean;
    constructor(
        private route:ActivatedRoute,
        private _router: Router,
        private _HeroService: HeroService,
        private location: Location

    ) { }
    editdata(selected: Todo) {
        this._HeroService.editData(selected);
        this._router.navigate(['/Dashboard']);
    }
    ngOnInit() {
        let id = this.route.snapshot.params['id'];
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
    goBack(): void {
      this.location.back();
    }
}
