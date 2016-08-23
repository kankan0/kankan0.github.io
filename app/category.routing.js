"use strict";
var components_1 = require('./components');
exports.CATEGORY_ROUTES = [
    { path: '福利', component: components_1.PictureListComponent, pathMatch: 'full' },
    { path: ':category', component: components_1.PostListComponent }
];
//# sourceMappingURL=category.routing.js.map