var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProductDetailCtrl = (function () {
            // product: angular.IPromise<app.domain.IProduct>;
            function ProductDetailCtrl(product) {
                this.product = product;
            }
            return ProductDetailCtrl;
        }());
        angular
            .module('productManagement')
            .controller('ProductDetailCtrl', ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
