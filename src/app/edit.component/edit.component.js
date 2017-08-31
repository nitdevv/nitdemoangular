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
var todo_service_1 = require('../services/todo.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var router_deprecated_2 = require('@angular/router-deprecated');
var EditComponent = (function () {
    function EditComponent(_router, _HeroService, _routeParams) {
        this._router = _router;
        this._HeroService = _HeroService;
        this._routeParams = _routeParams;
        this.todo = [];
    }
    EditComponent.prototype.editdata = function (selected) {
        this._HeroService.editData(selected);
        this._router.navigate(['Dashboard']);
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._routeParams.get('id');
        if (id) {
            this.edit = true;
            this._HeroService.getdetail(id)
                .then(function (todo) {
                _this.todo = todo;
            });
        }
        else {
            this.edit = false;
        }
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'edit-component',
            templateUrl: 'app/edit.component/edit.component.html',
            styleUrls: ['app/css/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, todo_service_1.HeroService, router_deprecated_2.RouteParams])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map