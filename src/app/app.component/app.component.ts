import { Component } from '@angular/core'
import {DashboardComponent} from '../dashboard.component/todo.dashboard'
import {HeroService} from '../services/todo.service'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {EditComponent} from '../edit.component/edit.component'
import * as _  from 'lodash';

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/edit',
        name: 'Edit',
        component: EditComponent,
    }
])
@Component({
    selector: 'my-app',
    template:
    `<router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})
export class AppComponent implements OnInit {
    title = 'ToDo';
    ngOnInit() {

    }
}
