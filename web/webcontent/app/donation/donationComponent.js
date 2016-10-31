var donationModule = angular.module('donationModule');
var DonationController = ['$i18n', 'donationService', function ($i18n, donationService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;

    self.donation = donationService;

    self.donation.donations = [];
    self.donation.getDonation();


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
