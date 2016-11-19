var restApiModule = angular.module('restAPIModule');
restApiModule.factory('UserProfileApiService', ['$resource', function ($resource) {
    /**
     * This configuration enable POST, GET, PUT DELETE operations for the defined url and custom urls
     * */
    return $resource('/user/user-detail/:userId', {userId: '@id'},
        {});

}]);
