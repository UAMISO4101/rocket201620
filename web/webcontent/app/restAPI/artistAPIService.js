var restApiModule = angular.module('restAPIModule');
restApiModule.factory('ArtistApiService', ['$resource', function ($resource) {
    /**
     * This configuration enable POST, GET, PUT DELETE operations for the defined url and custom urls
     * */
    return $resource('/user/artist/:userId', {userId:'@id'});

}]);
