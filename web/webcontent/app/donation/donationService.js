/**
 * Created by diego on 8/10/2016.
 */

var donationModule = angular.module('donationModule');
donationModule.factory('donationService', ['UserApiService', '$i18n', '$freevenModal', 'notifierService',
    'mainService', '$filter',
    function (UserApiService, $i18n, $freevenModal, notifierService, mainService, $filter) {

        var donationService = function () {

            var self = this;

            self.donation = {};
            self.donation2 = {};

            self.donations = [];

            this.getDonation = function () {
                //TODO CONSUME GET Donations
                self.donation.first_name = "Diego";
                self.donation.email = "yego23@gmail.com";
                self.donation.last_name = "Ruiz";
                self.donation.date = new Date("2016-10-30");
                self.donation.value = 12000;

                self.donation2.first_name = "Pedro";
                self.donation2.email = "yego23@gmail.com";
                self.donation2.last_name = "Sanchez";
                self.donation2.date = new Date("2016-10-31");
                self.donation2.value = 15000;

                self.donations.push(self.donation);
                self.donations.push(self.donation2);

            };

        };
        return new donationService();
    }]);
