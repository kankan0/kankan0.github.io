"use strict";
var router_1 = require("@angular/router");
var today_1 = require("./today");
var category_1 = require("./category");
var APP_ROUTES = [
    { path: '', component: today_1.TodayComponent },
    { path: 'category/:category', component: category_1.CategoryComponent }
];
exports.APP_ROUTING = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map