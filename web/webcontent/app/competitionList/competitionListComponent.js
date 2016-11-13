var competitionListModule = angular.module('competitionListModule');
var CompetitionListController = ['$i18n', 'competitionListService', 'mainService', 'Upload',
    '$freevenModal', 'notifierService',
    function ($i18n, competitionListService, mainService, Upload, $freevenModal, notifierService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;

        self.competitionList = competitionListService;

        self.competitionList.listCompetitions();

        self.participate = function (id) {
            var authenticated = mainService.isAuthenticated();
            if (authenticated) {
                var isArtist = mainService.isArtist();
                if (isArtist) {
                    self.loadPopUp(id);
                } else {
                    notifierService.info("Convocatorias", "Sólo los artistas pueden participar");
                }
            } else {
                notifierService.warning("Convocatorias", "Por favor, inice sesión para participar");
            }
        }

        self.loadPopUp = function (id) {
            self.competitionList.showLoadTrackPopup(id);
        }

    }];

competitionListModule.component('competitionList', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: CompetitionListController,
    controllerAs: 'ctrl',
    template: require('./competitionList.html')
});
