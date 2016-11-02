var restApiModule = angular.module('restAPIModule');
restApiModule.factory('GenderApiService', ['$resource', function ($resource) {
    /**
     * This configuration enable POST, GET, PUT DELETE operations for the defined url and custom urls
     * */
    return $resource('api/track/gender/:guidGender', {guid: '@guid'}, {
        /*custom urls*/
        getGenders: {
            url: 'api/track/gender',
            method: 'GET',
            params: {
            },
            isArray: false
        }

    });
}]);


