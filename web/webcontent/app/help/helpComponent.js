var helpModule = angular.module('helpModule');
var HelpController = ['helpService',
    function (helpService) {
        var self = this;
        self.isEnabled = function () {
            return helpService.isEnabled();
        };
        self.closeHelp = function (){
            helpService.setEnable(false);
        }
    }];

helpModule.component('help', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: HelpController,
    controllerAs: 'ctrl',
    template: require('./help.html')
});
