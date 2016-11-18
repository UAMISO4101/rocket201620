var competitionDetailModule = angular.module('competitionDetailModule');
var CompetitionDetailController = ['$i18n', 'CompetitionApiService', '$routeParams', 'mainService',
    function ($i18n, CompetitionApiService, $routeParams, mainService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.items = [];
        self.competition = {};

        self.loadCompetitionDetail = function (id) {
            self.items = [];
            if (id != undefined) {
                CompetitionApiService.getCompetition(
                    {guidCompetition: id},
                    function (response) {
                        self.competition = response.results[0];
                        self.items = response.results[0].items;
                    },
                    function (error) {
                        console.log('Error loading full competition');
                    });

                CompetitionApiService.getVotesUser(
                    {
                        guidItem: 1,
                        guidUser: 1
                    },
                    function (response) {
                        console.log("Votos");
                        console.log(response);
                    },
                    function (error) {
                        console.log('Error loading full Votos');
                    });
            }
        };

        self.loadCompetitionDetail($routeParams.idCompetition);

        self.vote = function (itemId, trackId) {
            var params = {
                item: itemId,
                user: mainService.getUserId(),
                track: trackId
            };
            CompetitionApiService.createVote(
                params,
                function (response) {
                    console.log(response);
                },
                function (error, response) {
                    console.log('Error creating vote');
                    console.log(error.data.non_field_errors[0]);
                });
        }

    }];

competitionDetailModule.component('competitionDetail', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: CompetitionDetailController,
    controllerAs: 'ctrl',
    template: require('./competitionDetail.html')
});
