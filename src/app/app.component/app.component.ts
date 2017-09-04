import { Component,OnInit } from '@angular/core';
import {DashboardComponent} from '../dashboard.component/todo.dashboard';
import {HeroService} from '../services/todo.service';
import { RouterModule, Routes } from '@angular/router';

import {EditComponent} from '../edit.component/edit.component'
import * as _  from 'lodash';

@Component({
    selector: 'app-root',
    template:
    `<router-outlet></router-outlet>
    `,
    providers: [
        HeroService
    ]
})
export class AppComponent implements OnInit {
    title = 'ToDo';
    ngOnInit() {

    }
}
