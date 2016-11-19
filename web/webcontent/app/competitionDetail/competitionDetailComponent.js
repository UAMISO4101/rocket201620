var competitionDetailModule = angular.module('competitionDetailModule');
var CompetitionDetailController = ['$i18n', 'CompetitionApiService', '$routeParams', 'mainService', 'notifierService',
    function ($i18n, CompetitionApiService, $routeParams, mainService, notifierService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.items = [];
        self.competition = {};
        self.showItems = false;

        self.loadCompetitionDetail = function (id) {
            self.items = [];
            if (id != undefined) {
                CompetitionApiService.getCompetition(
                    {guidCompetition: id},
                    function (response) {
                        self.competition = response.results[0];
                        self.items = response.results[0].items;
                        console.log(response.results[0].items.length);
                        for (var i = 0; i < response.results[0].items.length; i++) {
                            if (response.results[0].items[i].tracks.length == 0) {
                                self.showItems = false;
                            } else {
                                self.showItems = true;
                                break;
                            }
                        }

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
            var authenticated = mainService.isAuthenticated();
            if (authenticated) {
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
            } else {
                notifierService.warning("Convocatorias", "Por favor, inice sesión para votar");
            }

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
