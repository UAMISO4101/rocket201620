var playerModule = angular.module('helpModule');
playerModule.factory('helpService', ['trackListService',
    function (trackListService) {
        var HelpService = function () {
            var self = this;
            self.enabled = false;
            self.isEnabled = function () {
                var self = this;
                return self.enabled;
            };

            self.setEnable = function (newValue) {
                var self = this;
                self.enabled = newValue;
            };

            self.enablePlayer = function () {
                trackListService.playFirstTrack();
            };
        };
        return new HelpService();
    }]);
