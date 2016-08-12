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
var data_service_1 = require('../services/data.service');
var TodayComponent = (function () {
    function TodayComponent(dataService) {
        this.dataService = dataService;
        this.dataReady = false;
        this.pictures = null;
        this.videos = null;
        this.frontEnd = null;
        this.andriod = null;
        this.ios = null;
        this.extend = null;
    }
    TodayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.fetchByDate(new Date()).subscribe(function (data) {
            _this.pictures = data.results['福利'];
            _this.videos = data.results['休息视频'];
            _this.frontEnd = data.results['前端'];
            _this.dataReady = true;
        });
    };
    TodayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'kk-today',
            templateUrl: 'today.component.html',
            styleUrls: ['today.component.css']
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], TodayComponent);
    return TodayComponent;
}());
exports.TodayComponent = TodayComponent;
//# sourceMappingURL=today.component.js.map