var  donationModule = angular.module('donationModule');
var DonationController = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.showAlert = function () {
        alert($i18n.translate.general_alert);
    };
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
