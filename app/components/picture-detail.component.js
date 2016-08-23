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
var services_1 = require('../services');
var PictureDetailComponent = (function () {
    function PictureDetailComponent(dataService) {
        this.dataService = dataService;
        this.dataReady = false;
    }
    PictureDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.fetchCategoryDetailOfToday('福利').subscribe(function (category) {
            console.log(JSON.stringify(category));
            _this.url = category[0].url;
            _this.dataReady = true;
        });
    };
    PictureDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'kk-picture-detail',
            templateUrl: 'picture-detail.component.html',
            styleUrls: ['picture-detail.component.css']
        }), 
        __metadata('design:paramtypes', [services_1.DataService])
    ], PictureDetailComponent);
    return PictureDetailComponent;
}());
exports.PictureDetailComponent = PictureDetailComponent;
//# sourceMappingURL=picture-detail.component.js.map