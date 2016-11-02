var playerPictureModule = angular.module('playerPictureModule');
var PlayerPictureController = ['$i18n', 'playerService', function ($i18n, playerService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.playerService = playerService;
}];

playerPictureModule.component('playerPicture', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: PlayerPictureController,
    controllerAs: 'ctrl',
    template: require('./playerPicture.html')
});
