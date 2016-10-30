var helpModule = angular.module('helpModule');
var HelpItemController = ['helpService', function (helpService) {
    var self = this;
    self.isEnabled= function(){
       return  helpService.isEnabled();
    }

}];

helpModule.component('helpItem', {
    transclude: true,
    bindings: {
        text: '@'
    },
    controller: HelpItemController,
    controllerAs: 'ctrl',
    template: require('./helpItem.html')
});
