"use strict";
var router_1 = require("@angular/router");
var today_routing_1 = require('./today.routing');
var category_routing_1 = require('./category.routing');
var components_1 = require('./components');
var APP_ROUTES = [
    { path: '', redirectTo: '/today', pathMatch: 'full' },
    { path: 'today', component: components_1.TodayGankComponent },
    { path: 'today', component: components_1.TodayGankComponent, children: today_routing_1.TODAY_ROUTES },
    { path: 'category', component: components_1.CategoryComponent },
    { path: 'category', component: components_1.CategoryComponent, children: category_routing_1.CATEGORY_ROUTES }
];
exports.APP_ROUTING = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map