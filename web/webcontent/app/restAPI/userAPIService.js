var restApiModule = angular.module('restAPIModule');
restApiModule.factory('UserApiService', ['$resource', function ($resource) {
    /**
     * This configuration enable POST, GET, PUT DELETE operations for the defined url and custom urls
     * */
    return $resource('api/user/:guidUser',  {guid: '@guid'},  {

    });
}]);


