var  donationReturnModule = angular.module('donationReturnModule');
var DonationReturnController = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.showAlert = function () {
        alert($i18n.translate.general_alert);
    };
}];

donationReturnModule.component('donationReturn', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: DonationReturnController,
    controllerAs: 'ctrl',
    template: require('./donationReturn.html')
});
