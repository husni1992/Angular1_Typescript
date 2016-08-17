var app;
(function (app) {
    var ProductList;
    (function (ProductList) {
        var ProductListCtrl = (function () {
            function ProductListCtrl(DataAccessService) {
                var _this = this;
                this.DataAccessService = DataAccessService;
                this.title = "Product List";
                this.showImage = false;
                this.products = [];
                var productResource = DataAccessService.getProductResource();
                productResource.query(function (data) {
                    _this.products = data;
                });
            }
            ;
            ProductListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
                this.DataAccessService.getProductResource();
            };
            ProductListCtrl.$inject = ['DataAccessService'];
            return ProductListCtrl;
        }());
        angular
            .module('productManagement')
            .controller("ProductListCtrl", ProductListCtrl);
    })(ProductList = app.ProductList || (app.ProductList = {}));
})(app || (app = {}));
