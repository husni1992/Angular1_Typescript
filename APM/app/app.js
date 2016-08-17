var app;
(function (app) {
    angular.module("productManagement", [
        'common.services',
        'productResourceMock',
        'ui.router'
    ]);
})(app || (app = {}));
