var restApiModule = angular.module('restAPIModule');
restApiModule.factory('UserApiService', ['$resource', function ($resource) {
    /**
     * This configuration enable POST, GET, PUT DELETE operations for the defined url and custom urls
     * */
    return $resource('api/user/user-detail/:userId', {userId:'@id'}, {

        loginUser: {
            url: 'api/user/login',
            method: 'GET',
            params: {username: '@string', password: '@string'},
            isArray: false,

        }
    });


}]);


