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

        // Source: http://stackoverflow.com/questions/497790
        var dates = {
            convert: function (d) {
                // Converts the date in d to a date-object. The input can be:
                //   a date object: returned without modification
                //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
                //   a number     : Interpreted as number of milliseconds
                //                  since 1 Jan 1970 (a timestamp)
                //   a string     : Any format supported by the javascript engine, like
                //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
                //  an object     : Interpreted as an object with year, month and date
                //                  attributes.  **NOTE** month is 0-11.
                return (
                    d.constructor === Date ? d :
                        d.constructor === Array ? new Date(d[0], d[1], d[2]) :
                            d.constructor === Number ? new Date(d) :
                                d.constructor === String ? new Date(d) :
                                    typeof d === "object" ? new Date(d.year, d.month, d.date) :
                                        NaN
                );
            },
            compare: function (a, b) {
                // Compare two dates (could be of any type supported by the convert
                // function above) and returns:
                //  -1 : if a < b
                //   0 : if a = b
                //   1 : if a > b
                // NaN : if a or b is an illegal date
                // NOTE: The code inside isFinite does an assignment (=).
                return (
                    isFinite(a = this.convert(a).valueOf()) &&
                    isFinite(b = this.convert(b).valueOf()) ?
                    (a > b) - (a < b) :
                        NaN
                );
            },
            inRange: function (d, start, end) {
                // Checks if date in d is between dates in start and end.
                // Returns a boolean or NaN:
                //    true  : if d is between start and end (inclusive)
                //    false : if d is before start or after end
                //    NaN   : if one or more of the dates is illegal.
                // NOTE: The code inside isFinite does an assignment (=).
                return (
                    isFinite(d = this.convert(d).valueOf()) &&
                    isFinite(start = this.convert(start).valueOf()) &&
                    isFinite(end = this.convert(end).valueOf()) ?
                    start <= d && d <= end :
                        NaN
                );
            }
        }


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

            var howDate = dates.compare(today, new Date(self.event.event.date));

            if (howDate == -1) {
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
