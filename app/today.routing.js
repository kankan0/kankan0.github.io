"use strict";
var components_1 = require('./components');
exports.TODAY_ROUTES = [
    { path: '福利', component: components_1.PictureDetailComponent, pathMatch: 'full' },
    { path: ':sub-category', component: components_1.PostListComponent }
];
//# sourceMappingURL=today.routing.js.map