var app;
(function (app) {
    var config;
    (function (config) {
        var Routes = (function () {
            function Routes($urlRouterProvider, $stateProvider) {
                this.$urlRouterProvider = $urlRouterProvider;
                this.$stateProvider = $stateProvider;
                $stateProvider
                    .state('productList', {
                    url: '/products',
                    templateUrl: 'app/products/productListView.html',
                    controller: 'ProductListCtrl',
                    controllerAs: 'vm'
                })
                    .state('productDetail', {
                    url: '/product/:Id',
                    templateUrl: 'app/products/productDetailView.html',
                    controller: 'ProductDetailCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        product: function ($stateParams, DataAccessService) {
                            var productResource = DataAccessService.getProductResource();
                            return productResource.get({ productId: $stateParams.Id });
                        }
                    }
                });
                $urlRouterProvider.otherwise('/products');
            }
            Routes.$inject = ['$urlRouterProvider', '$stateProvider'];
            return Routes;
        }());
        config.Routes = Routes;
        angular
            .module('productManagement')
            .config(Routes);
    })(config = app.config || (app.config = {}));
})(app || (app = {}));
