module app.common{
    
    // this  is the interface for the service DataAccessService
    export interface IDataAccessService{
        getProductResource(): ng.resource.IResourceClass<IProductResource>;        
    }

    // interface for the $reosurce object returned from the getProductResource function
    interface IProductResource extends ng.resource.IResource<app.domain.IProduct>{

    }

    export class DataAccessService implements IDataAccessService{

        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService){

        }

        getProductResource(): ng.resource.IResourceClass<IProductResource>{
            alert('called to getProductResource2');
            return this.$resource("/api/products/:productId");
        }
    }

angular
    .module('common.services')
    .service('DataAccessService',
              DataAccessService);

}

