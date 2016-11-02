var donationCreatorModule = angular.module('donationCreatorModule');
var DonationCreatorController = ['donationCreatorService', function (donationCreatorService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.step = 0;
    self.donation = {
        bankAccountNumber: null,
        securityCode: null,
        value: null
    };
    self.createDonation = function () {
        var self = this;
        donationCreatorService.createDonation(self.donation);
        self.next();
    };

    self.close = function () {
        donationCreatorService.closeModal();
    };
    self.next = function () {
        var self = this;
        self.step += 1;
    };
}];

donationCreatorModule.component('donationCreator', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: DonationCreatorController,
    controllerAs: 'ctrl',
    template: require('./donationCreator.html')
});
