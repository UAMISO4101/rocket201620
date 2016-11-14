/**
 * Created by diego on 8/10/2016.
 */

var competitionListModule = angular.module('competitionListModule');
competitionListModule.factory('competitionListService', ['UserApiService', '$i18n', '$freevenModal', 'notifierService',
    'mainService', '$cookieStore', 'CompetitionApiService',
    function (UserApiService, $i18n, $freevenModal, notifierService, mainService, $cookieStore,
              CompetitionApiService) {
        var competitionListService = function () {

            var self = this;

            self.competitions = [];

            self.loading = false;

            self.listCompetitions = function () {
                self.competitions = [];

                CompetitionApiService.get(
                    {},
                    function (response) {
                        self.competitions = response.results;
                    },
                    function (error) {
                        console.log('Error loading competitions');
                    }
                );


            };

            self.showLoadTrackPopup = function (id) {
                var self = this;
                self.selectedIdCompetition = id
                $freevenModal.showPopup({}, {
                    size: 'small',
                    template: '<competition-participate></competition-participate>'
                });
            };

            self.getSelectedIdCompetition = function () {
                var self = this;
                return self.selectedIdCompetition;
            };

        };
        return new competitionListService();
    }]);
