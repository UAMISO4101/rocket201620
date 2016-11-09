var eventListModule = angular.module('eventListModule');
var EventListController = ['$i18n', 'eventListService','artistService',
    function ($i18n, eventListService,artistService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;

        self.eventList = eventListService;

        self.eventList.listEvents();

        self.loadArtist = function () {
            artistService.loadArtist();
        };

    }];

eventListModule.component('eventList', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: EventListController,
    controllerAs: 'ctrl',
    template: require('./eventList.html')
});
