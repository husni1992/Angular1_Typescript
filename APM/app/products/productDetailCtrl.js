var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProductDetailCtrl = (function () {
            function ProductDetailCtrl(DataAccessService, $stateParams) {
                var _this = this;
                this.DataAccessService = DataAccessService;
                this.title = "Product Details";
                var productId = $stateParams.Id;
                var productResource = DataAccessService.getProductResource();
                productResource.get({ productId: productId }, function (data) {
                    _this.product = data;
                });
            }
            ProductDetailCtrl.$inject = ['DataAccessService', '$stateParams'];
            return ProductDetailCtrl;
        }());
        angular
            .module('productManagement')
            .controller('ProductDetailCtrl', ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
