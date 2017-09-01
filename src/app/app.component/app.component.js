"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_dashboard_1 = require('../dashboard.component/todo.dashboard');
var todo_service_1 = require('../services/todo.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var edit_component_1 = require('../edit.component/edit.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ToDo';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: todo_dashboard_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/edit',
                name: 'Edit',
                component: edit_component_1.EditComponent,
            }
        ]),
        core_1.Component({
            selector: 'my-app',
            template: "<router-outlet></router-outlet>\n    ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                todo_service_1.HeroService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map