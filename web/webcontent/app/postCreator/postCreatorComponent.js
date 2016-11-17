var postCreatorModule = angular.module('postCreatorModule');
var PostCreatorController = ['$i18n', 'postCreatorService',
    function ($i18n, postCreatorService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.event = postCreatorService;
        self.dateOk = true;
        self.files = {};
        self.image = true;


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
            var isToday = (today.toDateString() == self.event.event.date.toDateString());
            var isLess = (today.toDateString() < self.event.event.date.toDateString());

            if (isToday == false && isLess == false) {
                return true;
            } else {
                return false;
            }
        };

        self.validateFieldsPostCreator = function () {
            if (self.event.event.name == undefined
                || self.event.event.place == undefined
                || self.event.event.date == undefined
                || self.event.event.description == undefined) {
                return false;
            } else {
                if (self.files) {
                    if (self.validateImage()) {
                        return true;
                    } else {
                        return false;
                    }

                }
            }
        }

        self.attachFile = function (files, fieldName) {
            if (files && files.length > 0) {
                var file = files[0];
                self.files[fieldName] = file;
            }
        };

        self.validateImage = function () {
            self.event.event.image = self.files.image;
            if (self.event.event.image == undefined) {
                self.image = false;
                return false;
            } else {
                self.image = true;
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
