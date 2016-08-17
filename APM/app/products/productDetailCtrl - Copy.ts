module app.productDetail {

    interface IProductDetailModel{
        title: string;
        product: app.domain.IProduct;
    }

    class ProductDetailCtrl{
        // product: angular.IPromise<app.domain.IProduct>;
        constructor(private product: app.domain.IProduct){
            
        }
    }

    angular
        .module('productManagement')
        .controller('ProductDetailCtrl', ProductDetailCtrl);
    
}