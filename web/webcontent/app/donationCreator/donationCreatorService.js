var donationCreatorModule = angular.module('donationCreatorModule');
donationCreatorModule.factory('donationCreatorService', ['$freevenModal', 'DonationApiService', 'mainService', 'notifierService',
    function ($freevenModal, DonationApiService, mainService, notifierService) {
        var DonationCreatorService = function () {
            var self = this;
            self.user = {};
            this.showDonationCreatorPopup = function (artist) {
                var self = this;
                self.artist = artist;
                $freevenModal.showPopup({}, {
                    template: '<donation-creator> </donation-creator>'
                });
            };
            this.closeModal = function () {
                $freevenModal.closePopup();
            };

            this.createDonation = function (donation) {
                var self = this;
                var user = mainService.getUserData();
                var params = {
                    user: user.id_user,
                    artist: self.artist.id,
                    value: donation.value
                };
                DonationApiService.createDonation(
                    params
                    ,
                    function (response) {
                        //notifierService.success("Transacción correcta", response.status);
                    },
                    function (error) {

                    });
            };
        };
        return new DonationCreatorService();
    }]);
