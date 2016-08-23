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
var PostListComponent = (function () {
    function PostListComponent(activatedRoute, dataService) {
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.topics = [];
        this.count = 20;
        this.page = 0;
        this.subscription = null;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.activatedRoute != null) {
            this.subscription = this.activatedRoute.params.subscribe(function (param) {
                _this.topics = [];
                // route from today component
                if (param['sub-category']) {
                    _this.loadTodayData(param['sub-category']);
                }
                else if (param['category']) {
                    _this.loadCategoryData(param['category']);
                }
            });
        }
    };
    PostListComponent.prototype.loadTodayData = function (category) {
        var _this = this;
        this.dataService.fetchCategoryDetailOfToday(category).subscribe(function (data) {
            //console.log(JSON.stringify(data));
            if (data.length > 0) {
                var result = data.slice();
                Array.prototype.push.apply(_this.topics, result);
            }
        });
    };
    PostListComponent.prototype.loadCategoryData = function (category) {
        var _this = this;
        this.dataService.fetchByCategory(category, this.count, this.page).subscribe(function (data) {
            //console.log(JSON.stringify(data));
            if (data.results.length > 0) {
                var result = data.results.slice();
                Array.prototype.push.apply(_this.topics, result);
            }
        });
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    };
    PostListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'kk-post-list',
            templateUrl: 'post-list.component.html',
            styleUrls: ['post-list.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, services_1.DataService])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;
//# sourceMappingURL=post-list.component.js.map