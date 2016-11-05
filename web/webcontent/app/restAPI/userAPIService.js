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
        }
        ,

        getUser: {
            url: 'api/user/user-detail/:userId',
            method: 'GET',
            params: {userId:'@id'},
            isArray: false,
        }

        ,
        forgotPasswordUser: {
            url: '/user/request_password_restore',
            method: 'GET',
            params: {username: '@string'},
            isArray: false,
        }
        ,
        restorePasswordUser: {
            url: '/user/change_password',
            method: 'GET',
            params: {username: '@string',password: '@string'},
            isArray: false,
        },

        updateUserInfo: {
            url: '/user/update_profile/',
            method: 'GET',
            params: {
                username: '@string',
                email: '@string',
                first_name: '@string',
                last_name: '@string'
            },
            isArray: false,
        },
    });


}]);


