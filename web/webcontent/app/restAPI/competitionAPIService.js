var restApiModule = angular.module('restAPIModule');
restApiModule.factory('CompetitionApiService', ['$resource', function ($resource) {
    /**
     * This configuration enable POST, GET, PUT DELETE operations for the defined url and custom urls
     * */
    return $resource('announcement/:guidCompetition', {guid: '@guid'}, {
        /*custom urls*/
    });
}]);


