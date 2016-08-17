module app.config{
    export class Routes{
        constructor(private $urlRouterProvider: ng.ui.IUrlRouterProvider, private $stateProvider: ng.ui.IStateProvider){
            $stateProvider  
                .state('productList',{
                    url: '/products',
                    templateUrl: 'app/products/productListView.html',
                    controller: 'ProductListCtrl',
                    controllerAs: 'vm'
                })
                .state('productDetail',{
                    url: '/product/:Id',
                    templateUrl: 'app/products/productDetailView.html',
                    controller: 'ProductDetailCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        product: function($stateParams, DataAccessService: app.common.IDataAccessService){                          
                            var productResource = DataAccessService.getProductResource();
                            
                            return productResource.get({productId: $stateParams.Id});
                        }
                    }
                })

                $urlRouterProvider.otherwise('/products');
        }
        static $inject = ['$urlRouterProvider', '$stateProvider'];
    }

angular
    .module('productManagement')
    .config(Routes);

}