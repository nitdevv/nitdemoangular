import { Component, OnInit } from '@angular/core'
import { Todo } from '../todo.data/todo';
import { HeroService } from '../services/todo.service';
import {Router} from '@angular/router';
import { Params } from '@angular/router';
import {ActivatedRoute} from '@angular/router'
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
        private router: Router,
        private HeroService: HeroService,
        private location: Location,

    ) { }
    editdata(selected: Todo) {
      console.log(selected);
        this.HeroService.editData(selected);
        this.location.back();
      }
      addData(newdata: Todo) {
         newdata.id = _.random(0, 500);
         newdata.active=true;
         newdata.complete=false;
         this.HeroService.addTodo(newdata);
         this.location.back();
     }
    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        if (id) {
            this.edit = true;
            // this.HeroService.getHeroes()
            this.HeroService.getdetail(id)
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
