var restApiModule = angular.module('restAPIModule');
restApiModule.factory('UserApiService', ['$resource', function ($resource) {
    /**
     * This configuration enable POST, GET, PUT DELETE operations for the defined url and custom urls
     * */
    return $resource('api/user/:guidUser', {guid: '@guid'}, {

        loginUser: {
            url: 'api/user/login',
            method: 'GET',
            params: {username: '@string', password: '@string'},
            isArray: false,

        },

        userChangePassword: {
            url: 'user/change_password_op',
            method: 'GET',
            params: {username: '@string', password: '@string', old_password: '@string'},
            isArray:false,

        },

        getArtist: {
            url: 'user/artist/',
            method: 'GET',
            params: {pk: '@string'},
            isArray:false,

        }
    });


}]);
