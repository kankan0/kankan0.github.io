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
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent() {
        this.formShowing = false;
        this.views = [
            {
                name: '今日精选',
                routing: [''],
                icon: 'assignment ind'
            },
            {
                name: '福利',
                routing: ['category', '福利'],
                icon: 'pets'
            },
            {
                name: '前端',
                routing: ['category', '前端'],
                icon: 'pets'
            },
            {
                name: 'Android',
                routing: ['category', 'Android'],
                icon: 'android'
            },
            {
                name: 'iOS',
                routing: ['category', 'iOS'],
                icon: 'pets'
            },
            {
                name: '休息视频',
                routing: ['category', '休息视频'],
                icon: 'pets'
            },
            {
                name: '拓展资源',
                routing: ['category', '拓展资源'],
                icon: 'pets'
            }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'kk-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map