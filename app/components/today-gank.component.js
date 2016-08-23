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
var services_1 = require('../services');
var TodayGankComponent = (function () {
    function TodayGankComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.dataReady = false;
        this.categories = ['福利'];
    }
    TodayGankComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.fetchCategoryOfToday().subscribe(function (category) {
            console.log(JSON.stringify(category));
            var result = category.slice();
            result.splice(result.indexOf('福利'), 1);
            Array.prototype.push.apply(_this.categories, result);
            _this.onDataReady();
        });
    };
    TodayGankComponent.prototype.onDataReady = function () {
        this.dataReady = true;
        this.router.navigate(['/today', this.categories[0]]);
    };
    TodayGankComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'kk-today-gank',
            templateUrl: 'today-gank.component.html',
            styleUrls: ['today-gank.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, services_1.DataService])
    ], TodayGankComponent);
    return TodayGankComponent;
}());
exports.TodayGankComponent = TodayGankComponent;
//# sourceMappingURL=today-gank.component.js.map