var donationModule = angular.module('donationModule');
var DonationController = ['$i18n', 'donationService',
    function ($i18n, donationService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.donationService = donationService;
        self.donationService.getDonationList();
    }];

donationModule.component('donation', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: DonationController,
    controllerAs: 'ctrl',
    template: require('./donation.html')
});
