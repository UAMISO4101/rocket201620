var listCreatorModule = angular.module('listCreatorModule');
listCreatorModule.factory('listCreatorService', ['$freevenModal', '$q', 'TracksApiService', 'mainService', 'notifierService',
    function ($freevenModal, $q, TracksApiService, mainService, notifierService) {
        var ListCreatorService = function () {
            var self = this;
            self.popupDeferred = $q.defer();
            self.showCreatorPopup = function () {
                var self = this;
                $freevenModal.showPopup({}, {
                    template: '<list-creator> </list-creator>'
                });
                return self.popupDeferred.promise;
            };

            self.closeCreatorPopup = function () {
                self.popupDeferred.resolve();
                $freevenModal.closePopup();
            };

            self.create = function (list) {
                var self = this;
                var user = mainService.getUserData();
                TracksApiService.createPlayList(
                    {},
                    {
                        name: list.name,
                        user: user.id_user
                    },
                    function (response) {
                        notifierService.info("Play list", "creada correctamente");
                        self.closeCreatorPopup();
                    },
                    function (error) {
                        self.closeCreatorPopup();
                    });
            };
        };
        return new ListCreatorService();
    }]);
