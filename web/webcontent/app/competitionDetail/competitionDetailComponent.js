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
        self.announcementId;

        self.loadCompetitionDetail = function (id) {
            self.items = [];
            self.announcementId = id;
            if (id != undefined) {
                CompetitionApiService.getCompetition(
                    {guidCompetition: id},
                    function (response) {
                        self.competition = response.results[0];
                        self.items = response.results[0].items;
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
                        notifierService.info("Convocatorias", "Gracias por tu voto");
                    },
                    function (error) {
                    });
            } else {
                notifierService.warning("Convocatorias", "Por favor, inice sesión para votar");
            }

        };
        self.selectWinner = function (itemId, trackId) {
            var authenticated = mainService.isAuthenticated();
            if (authenticated) {
                CompetitionApiService.selectWinner(
                    {announcementId: self.announcementId},
                    {track: trackId},
                    function (response) {
                        notifierService.info("Convocatorias", "Gracias por tu voto");
                    },
                    function (error) {
                    });
            } else {
                notifierService.warning("Convocatorias", "Por favor, inice sesión para elegir el ganador");
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
