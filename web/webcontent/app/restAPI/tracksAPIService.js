var restApiModule = angular.module('restAPIModule');
restApiModule.factory('TracksApiService', ['$resource', function ($resource) {
    /**
     * This configuration enable POST, GET, PUT DELETE operations for the defined url and custom urls
     * */
    return $resource('api/track/:guidTrack', {guid: '@guid'}, {
        /*custom urls*/
        searchTracks: {
            url: 'api/track/',
            method: 'GET',
            params: {},
            isArray: false,

        },
        loadTopTracks: {
            url: 'api/track',
            /* url: 'api/track/top',*/
            method: 'GET',
            params: {},
            isArray: false
        },
        setScoreTrack: {
            url: 'api/track/:idTrack/score',
            method: 'POST',
            params: {
                value: '@string'
            },
            isArray: false
        }
    });
}]);


