var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getProductResource = function () {
                alert('called to getProductResource2');
                return this.$resource("/api/products/:productId");
            };
            DataAccessService.$inject = ['$resource'];
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular
            .module('common.services')
            .service('DataAccessService', DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));