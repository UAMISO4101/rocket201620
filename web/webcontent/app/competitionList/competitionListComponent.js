var competitionListModule = angular.module('competitionListModule');
var CompetitionListController = ['$i18n', 'competitionListService', function ($i18n, competitionListService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;

    self.competitionList = competitionListService;

    self.competitionList.listCompetitions();

    self.participate = function (id) {
        alert("Participando "+id);
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
