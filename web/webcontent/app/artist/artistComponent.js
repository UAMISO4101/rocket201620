var  artistModule = angular.module('artistModule');
var ArtistController = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.showAlert = function () {
        alert($i18n.translate.general_alert);
    };
}];

artistModule.component('artist', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: ArtistController,
    controllerAs: 'ctrl',
    template: require('./artist.html')
});
