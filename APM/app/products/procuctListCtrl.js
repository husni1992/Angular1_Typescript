var app;
(function (app) {
    var ProductList;
    (function (ProductList) {
        var ProductListCtrl = (function () {
            function ProductListCtrl(DataAccessService) {
                this.DataAccessService = DataAccessService;
                this.title = "Product List";
                this.showImage = false;
                this.products = [
                    {
                        "productId": 1,
                        "productName": "Leaf Rake",
                        "productCode": "GDN-0011",
                        "releaseDate": new Date(2009, 2, 19),
                        "description": "Leaf rake with 48-inch wooden handles.",
                        "price": 19.95,
                        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                    },
                    {
                        "productId": 2,
                        "productName": "Garden Cart",
                        "productCode": "GDN-0023",
                        "releaseDate": new Date(2010, 2, 18),
                        "description": "15 gallon capacity rolling garden cart",
                        "price": 32.99,
                        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                    },
                    {
                        "productId": 5,
                        "productName": "Hammer",
                        "productCode": "TBX-0048",
                        "releaseDate": new Date(2013, 4, 21),
                        "description": "Curved claw steel hammer",
                        "price": 85.99,
                        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                    }
                ];
                var newProduct = new app.domain.Product(3, 'Apple', 'A110', new Date(2016, 9, 1), 100, 'This is an apple', 'https://pixabay.com/static/uploads/photo/2013/07/13/11/34/apple-158419_960_720.png');
                newProduct.price = newProduct.calculateDiscount(10);
                this.products.push(newProduct);
            }
            ;
            ProductListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
                this.DataAccessService.getProductResource();
            };
            ProductListCtrl.$inject = ['DataAccessService'];
            return ProductListCtrl;
        }());
        ProductList.ProductListCtrl = ProductListCtrl;
        angular
            .module('productManagement')
            .controller("ProductListCtrl", ProductListCtrl);
    })(ProductList = app.ProductList || (app.ProductList = {}));
})(app || (app = {}));
