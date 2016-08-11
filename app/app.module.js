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
var platform_browser_1 = require('@angular/platform-browser');
var button_toggle_1 = require('@angular2-material/button-toggle/button-toggle');
var button_1 = require('@angular2-material/button/button');
var checkbox_1 = require('@angular2-material/checkbox/checkbox');
var radio_1 = require('@angular2-material/radio/radio');
var slide_toggle_1 = require('@angular2-material/slide-toggle/slide-toggle');
var slider_1 = require('@angular2-material/slider/slider');
var sidenav_1 = require('@angular2-material/sidenav/sidenav');
var list_1 = require('@angular2-material/list/list');
var grid_list_1 = require('@angular2-material/grid-list/grid-list');
var card_1 = require('@angular2-material/card/card');
var icon_1 = require('@angular2-material/icon/icon');
var progress_circle_1 = require('@angular2-material/progress-circle/progress-circle');
var progress_bar_1 = require('@angular2-material/progress-bar/progress-bar');
var input_1 = require('@angular2-material/input/input');
var tabs_1 = require('@angular2-material/tabs/tabs');
var toolbar_1 = require('@angular2-material/toolbar/toolbar');
var tooltip_1 = require('@angular2-material/tooltip/tooltip');
var ripple_1 = require('@angular2-material/core/ripple/ripple');
var portal_directives_1 = require('@angular2-material/core/portal/portal-directives');
var overlay_directives_1 = require('@angular2-material/core/overlay/overlay-directives');
var menu_1 = require('@angular2-material/menu/menu');
var dir_1 = require('@angular2-material/core/rtl/dir');
var app_component_1 = require('./app.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [platform_browser_1.BrowserModule,
                button_1.MdButtonModule,
                button_toggle_1.MdButtonToggleModule,
                card_1.MdCardModule,
                checkbox_1.MdCheckboxModule,
                grid_list_1.MdGridListModule,
                icon_1.MdIconModule,
                input_1.MdInputModule,
                list_1.MdListModule,
                menu_1.MdMenuModule,
                progress_bar_1.MdProgressBarModule,
                progress_circle_1.MdProgressCircleModule,
                radio_1.MdRadioModule,
                ripple_1.MdRippleModule,
                sidenav_1.MdSidenavModule,
                slider_1.MdSliderModule,
                slide_toggle_1.MdSlideToggleModule,
                tabs_1.MdTabsModule,
                toolbar_1.MdToolbarModule,
                tooltip_1.MdTooltipModule,
                overlay_directives_1.OverlayModule,
                portal_directives_1.PortalModule,
                dir_1.RtlModule,],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map