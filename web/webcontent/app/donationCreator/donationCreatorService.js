var donationCreatorModule = angular.module('donationCreatorModule');
donationCreatorModule.factory('donationCreatorService', ['$freevenModal', 'DonationApiService',
    function ($freevenModal, DonationApiService) {
        var DonationCreatorService = function () {
            var self = this;
            self.user = {};
            this.showDonationCreatorPopup = function () {
                $freevenModal.showPopup({}, {
                    template: '<donation-creator> </donation-creator>'
                });
            };
            this.closeModal = function () {
                $freevenModal.closePopup();
            };

            this.createDonation = function () {
                DonationApiService.createDonation(
                    self.username,
                    function (response) {
                        notifierService.success("Transacción correcta", response.status);
                    },
                    function (error) {

                    });
            };


            this.createDonationPayU = function () {
                var donationParams = {
                    merchantId: 508029,
                    ApiKey: '4Vj8eK4rloUd272L48hsrarnUA',
                    referenceCode: 'TestPayU',
                    accountId: 512326,
                    description: 'Test PAYU',
                    amount: 3,
                    tax: 0,
                    taxReturnBase: 0,
                    currency: 'USD',
                    signature: 'ba9ffa71559580175585e45ce70b6c37',
                    test: 1,
                    buyerEmail: 'test@test.com'
                };
                DonationApiService.payuDonation(
                    donationParams,
                    function (response) {
                        notifierService.success("Transacción correcta", response.status);
                    },
                    function (error) {

                    });
            };


        };
        return new DonationCreatorService();
    }]);
