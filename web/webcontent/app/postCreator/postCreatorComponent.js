var postCreatorModule = angular.module('postCreatorModule');
var PostCreatorController = ['$i18n', 'postCreatorService',
    function ($i18n, postCreatorService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.event = postCreatorService;
        self.dateOk = true;


        self.saveEvent = function () {
            if (self.validateFieldsPostCreator()) {
                if (self.validateDate()) {
                    self.event.saveEvent();
                    self.dateOk = true;
                } else {
                    self.dateOk = false;
                }
            }
        };

        self.validateDate = function () {
            var today = new Date();
            var isToday = (today.toDateString() == self.event.event.date_event.toDateString());
            var isLess = (today.toDateString() > self.event.event.date_event.toDateString());
            if (isToday == false && isLess == true) {
                return true;
            } else {
                return false;
            }
        }

        self.validateFieldsPostCreator = function () {
            if (self.event.event.eventName == undefined
                || self.event.event.eventPlace == undefined
                || self.event.event.date_event == undefined
                || self.event.event.eventDescription == undefined) {
                return false;
            } else {
                return true;
            }
        }

    }];

postCreatorModule.component('postCreator', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: PostCreatorController,
    controllerAs: 'ctrl',
    template: require('./postCreator.html')
});
