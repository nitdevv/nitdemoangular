import { Component, OnInit, Input } from '@angular/core'
import { Todo } from '../todo.data/todo';
import { HeroService } from '../services/todo.service';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap} from '@angular/router'
import { Location }  from '@angular/common';
import { AddComponent } from './add.component';

import * as _ from 'lodash';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'edit-component',
  templateUrl: './edit.component.html',
  styleUrls: ['../dashboard.component.css'],
})
export class EditComponent implements OnInit {
  @Input() todo: Todo;
  todos = [];
  edit: Boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private HeroService: HeroService,
    private location: Location,

  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.HeroService.getdetail(+params.get('id')))
      .subscribe(todo => this.todo = todo);
  }
  goBack(): void {
    this.location.back();
  }
}
