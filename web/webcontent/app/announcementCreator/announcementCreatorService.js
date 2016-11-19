var announcementCreatorModule = angular.module('announcementCreatorModule');
announcementCreatorModule.factory('announcementCreatorService', ['$freevenModal', '$q',
    function ($freevenModal, $q) {
        var AnnouncementCreatorService = function () {
            var self = this;
            self.popupDeferred = $q.defer();
            self.showCreatorPopup = function () {
                var self = this;
                $freevenModal.showPopup({}, {
                    template: '<announcement-creator> </announcement-creator>'
                });
                return self.popupDeferred.promise;
            };

            self.closeCreatorPopup = function () {
                self.popupDeferred.resolve();
                $freevenModal.closePopup();
            };
        };
        return new AnnouncementCreatorService();
    }]);
