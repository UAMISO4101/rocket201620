var commonDirectivesModule = angular.module('commonDirectivesModule');
commonDirectivesModule.factory('$freevenModal', ['$uibModal', function ($uibModal) {
    var ModalAreaService = function () {
        var _self = {}; //private
        _self.modalInstance;
        this.showPopup = function (data, settings) {
            if (_self.modalInstance) {
                _self.modalInstance.close();
            }

            settings = settings || {};
            if ('templateUrl' in settings && 'template' in settings) {
                delete settings.template;
            }
            settings.resolve = {
                data: function () {
                    return data;
                }
            };
            _self.modalInstance = $uibModal.open(settings);
            return _self.modalInstance.result;
        };
        this.closePopup = function () {
            _self.modalInstance.close();
            _self.modalInstance = undefined;
        };
        this.getModalInstance = function () {
            return _self.modalInstance;
        };

        this.setModalInstance = function (value) {
            _self.modalInstance = value;
        };
    };
    return new ModalAreaService();
}]);
