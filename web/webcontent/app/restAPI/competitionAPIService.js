var restApiModule = angular.module('restAPIModule');
restApiModule.factory('CompetitionApiService', ['$resource', function ($resource) {
    /**
     * This configuration enable POST, GET, PUT DELETE operations for the defined url and custom urls
     * */
    return $resource('announcement/:guidCompetition', {guid: '@guid'}, {
        /*custom urls*/
        getCompetition: {
            url: 'announcement/full/:guidCompetition',
            method: 'GET',
            params: {guidCompetition: '@id'},
            isArray: false
        },
        createVote: {
            url: 'announcement/vote-create/',
            method: 'POST',
            params: {item: '@string', user: '@string', track: '@string'},
            isArray: false
        },
        getVotesUser: {
            url: 'announcement/vote-get/:guidItem/:guidUser',
            method: 'GET',
            params: {guidItem: '@id', guidUser: '@id'},
            isArray: false
        },
        createRelationsItemsVsTracks: {
            url: 'announcement/participatef/',
            method: 'POST',
            params: {idAnnouncement: '@string', relations: '@string'},
            isArray: false
        },
        selectWinner: {
            url: 'announcement/select-winner/:announcementId/',
            method: 'PUT',
            params: {track: '@string'},
            isArray: false
        }
    });
}]);


