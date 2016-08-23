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
var http_1 = require("@angular/http");
var Rx_1 = require('rxjs/Rx');
require('rxjs/Rx');
var moment = require('moment');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.todayGank = null;
    }
    DataService.prototype.fetchCategoryDetailOfToday = function (category) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            if (_this.todayGank == null) {
                _this.fetchByDateRecursively(new Date(), true).subscribe(function (data) {
                    _this.todayGank = data;
                    observer.next(_this.todayGank.results[category]);
                    observer.complete();
                });
            }
            else {
                observer.next(_this.todayGank.results[category]);
                observer.complete();
            }
        });
    };
    DataService.prototype.fetchCategoryOfToday = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            if (_this.todayGank == null) {
                _this.fetchByDateRecursively(new Date(), true).subscribe(function (data) {
                    _this.todayGank = data;
                    observer.next(_this.todayGank.category);
                    observer.complete();
                });
            }
            else {
                console.log(JSON.stringify(_this.todayGank.category));
                observer.next(_this.todayGank.category);
                observer.complete();
            }
        });
    };
    DataService.prototype.fetchByDateRecursively = function (date, loadOneDayBefore) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.fetchByDate(date).subscribe(function (data) {
                //console.log(JSON.stringify(data));
                if (data.category.length == 0) {
                    _this.fetchByDateRecursively(moment(date).subtract(1, 'day').toDate(), false);
                }
                else {
                    observer.next(data);
                    observer.complete();
                }
            });
        });
    };
    DataService.prototype.fetchByDate = function (date) {
        var url = 'http://gank.io/api/day/' + moment(date).format('YYYY/MM/DD');
        console.log('fetch data of date : ' + url);
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    DataService.prototype.fetchByCategory = function (category, count, page) {
        var url = 'http://gank.io/api/data/' + category + '/' + count + '/' + page;
        console.log('fetch data of category : ' + url);
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    DataService.prototype.fetchByUrl = function (url) {
        return this.http.get(url).map(function (response) { return response.text(); });
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map