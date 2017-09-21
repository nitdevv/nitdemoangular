import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as _ from 'lodash';
import { Location } from '@angular/common';
import { HeroService } from '../services/todo.service';
import { Todo } from '../todo.data/todo';
@Component({
  selector :'add',
  templateUrl:'./add.component.html',
  styleUrls: ['../dashboard.component.css'],
})
export class AddComponent{
  constructor(private HeroService:HeroService,
              private location: Location ,
              ){}
  todo:Todo[]=[];

  add(newdata: Todo) {
    newdata.id = _.random(0, 500);
    newdata.active = true;
    newdata.complete = false;
    this.location.back();
  }

}
