module app.productDetail {

    interface IProductDetailModel{
        title: string;
        product: app.domain.IProduct;
    }

    interface IProductParams extends ng.ui.IStateParamsService{
        Id: number;
    }

    class ProductDetailCtrl implements IProductDetailModel{
        // product: angular.IPromise<app.domain.IProduct>;
        title: string;
        product: app.domain.IProduct;
        
        static $inject = ['DataAccessService', '$stateParams'];
        constructor(private DataAccessService: app.common.DataAccessService, $stateParams: IProductParams){
            this.title = "Product Details";
            var productId = $stateParams.Id;
            var productResource = DataAccessService.getProductResource();
            productResource.get({productId: productId},(data: app.domain.IProduct) => {
                this.product = data;
            })
        }
    }

    angular
        .module('productManagement')
        .controller('ProductDetailCtrl', ProductDetailCtrl);
    
}