var playerModule = angular.module('playerModule');
var PlayerController = ['playerService', '$scope', 'trackListService',
    function (playerService, $scope, trackListService) {
        var self = this;
        self.playerService = playerService;

        // tell trackListService obtain prev/next track
        self.next = function () {
            trackListService.next();
        };
        self.prev = function () {
            trackListService.prev();
        };
    }];

playerModule.component('player', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: PlayerController,
    controllerAs: 'ctrl',
    template: require('./player.html')
});
