var artistModule = angular.module('artistModule');
var ArtistController = ['$i18n', 'artistService', '$routeParams', 'donationCreatorService',
    function ($i18n, artistService, $routeParams, donationCreatorService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;

        self.artist = artistService;

        artistService.loadArtist($routeParams.idArtist);
        self.showDonationCreatorPopup = function (artist) {
            artist.id = $routeParams.idArtist;
            donationCreatorService.showDonationCreatorPopup(artist);
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
