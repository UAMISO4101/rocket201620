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
            /*url: 'api/track/top10',*/
            url: 'api/track',
            method: 'GET',
            params: {},
            isArray: false
        },
        setScoreTrack: {
            url: 'api/track/rate_track',
            method: 'GET',
            params: {
                username: '@string',
                track_id: '@string',
                rate: '@string'
            },
            isArray: false
        },
        traceTrack: {
            url: 'api/track/trace',
            method: 'POST',
            params: {
                user: '@string',
                track: '@string',
                artist: '@string',
                action: '@string'
            },
            isArray: false
        }
    });
}]);


