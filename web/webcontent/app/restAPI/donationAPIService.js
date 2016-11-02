var restApiModule = angular.module('restAPIModule');
restApiModule.factory('DonationApiService', ['$resource', function ($resource) {
    /**
     * This configuration enable POST, GET, PUT DELETE operations for the defined url and custom urls
     * */
    return $resource('api/donation/:guidTrack', {guid: '@guid'}, {
        /*custom urls*/
        createDonation: {
            url: 'api/donation',
            method: 'POST',
            params: {
                artistId: '@string',
                bankAccountNumber: '@string',
                securityCode: '@string',
                donationValue: '@string'
            },
            isArray: false
        },

        payuDonation: {
            url: 'https://sandbox.gateway.payulatam.com/ppp-web-gateway',
            method: 'POST',
            params: {
            },
            isArray: false
        }

    });
}]);


