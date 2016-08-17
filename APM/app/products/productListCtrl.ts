module app.ProductList {

    interface IProductListModel {
        title: string;
        showImage: boolean;
        products: app.domain.IProduct[];
        toggleImage(): void;
    }

    class ProductListCtrl implements IProductListModel {
        title: string;
        showImage: boolean;
        products: app.domain.IProduct[];

        static $inject = ['DataAccessService'];
        constructor(private DataAccessService: app.common.IDataAccessService) {
            this.title = "Product List";
            this.showImage = false;
            this.products = [];
            
            var productResource = DataAccessService.getProductResource();
            productResource.query((data: app.domain.IProduct[]) => {
                this.products = data;
            })
        };

        toggleImage() :void{
            this.showImage = !this.showImage;
            this.DataAccessService.getProductResource();
        }
    }

angular
    .module('productManagement')
    .controller("ProductListCtrl",
    ProductListCtrl);
}