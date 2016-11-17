/**
 * Created by diego on 8/10/2016.
 */

var donationModule = angular.module('donationModule');
donationModule.factory('donationService', ['DonationApiService', 'mainService',
    function (DonationApiService, mainService) {
        var donationService = function () {
            var self = this;
            self.donations = [];
            this.getDonationList = function () {
                var user = mainService.getUserData();
                DonationApiService.donationList(
                    {
                        artist__id: user.id_artist
                    },
                    function (response) {
                        self.donations = response.results;
                        if (self.donations.length == 0) {
                            self.listEmpty = true;
                        }
                    },
                    function (error) {
                        console.log('Error loading donations');
                    });
            };

        };
        return new donationService();
    }]);
