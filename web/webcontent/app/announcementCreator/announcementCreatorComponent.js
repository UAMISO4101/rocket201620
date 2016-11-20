var announcementCreatorModule = angular.module('announcementCreatorModule');
var AnnouncementCreatorController = ['Upload', 'mainService', 'announcementCreatorService', 'notifierService', '$q', 'GenderApiService', '$filter',
    function (Upload, mainService, announcementCreatorService, notifierService, $q, GenderApiService, $filter) {
        var self = this;
        self.files = {};
        self.loading = false;
        self.items = [];
        self.selectedItem = {};
        self.showItem = false;

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

        self.attachFile = function (files, fieldName) {
            if (files && files.length > 0) {
                var file = files[0];
                self.files[fieldName] = file;
            }
        };
        self.showItemView = function () {
            var self = this;
            if (self.validateFields()) {
                if (self.validateDate()) {
                    self.showItem = true;
                } else {
                    notifierService.error("Error en las fechas", "Verifique las fechas por favor.");
                }
            } else {
                notifierService.error("Error Convocatoria", "Faltan campos por diligenciar");
            }
        };

        self.addItem = function () {
            var self = this;
            if (self.validateFieldsItem()) {
                self.items.push(JSON.parse(JSON.stringify(self.selectedItem)));
                self.selectedItem = {};
            } else {
                notifierService.error("Error Item", "Faltan campos por diligenciar");
            }
        };

        self.createAnnouncement = function () {
            var self = this;
            var user = mainService.getUserData();
            self.loading = true;
            self.addItem();
            if (self.files) {
                Upload.upload({
                    url: 'announcement/create/',
                    data: {
                        name: self.name,
                        description: self.description,
                        start_date: $filter('date')(self.start_date, 'yyyy-MM-dd'),
                        end_date: $filter('date')(self.end_date, 'yyyy-MM-dd'),
                        image: self.files.image,
                        popular_selection: self.popular_selection,
                        open: true,
                        owner: user.id_agent || 1,
                        score: 0
                    }
                }).progress(function (evt) {
                }).success(function (data, status, headers, config) {
                    self.createRelatedItems(data.id);
                }).error(function (data, status, headers, config) {
                    announcementCreatorService.closeCreatorPopup();
                    notifierService.warning("Error al crear convocatoria", ".");
                });
            }
        };

        self.createRelatedItems = function (parentId) {
            var self = this;
            var deferreds = [];
            for (var i = 0; i < self.items.length; i++) {
                var def = self.createItem(self.items[i], parentId);
                deferreds.push(def);
            }
            $q.all(deferreds).then(
                function handleResolve(value) {
                    notifierService.success("La convocatoria se ha creado correctamente", ".");
                    self.loading = false;
                    announcementCreatorService.closeCreatorPopup();
                }
            );
        };

        self.createItem = function (item, parentId) {
            var self = this;
            self.loading = true;
            if (self.files) {
                Upload.upload({
                    url: 'announcement/item-create/',
                    data: {
                        name: item.name,
                        description: item.description,
                        image: self.files.image,
                        gender: item.gender,
                        announcement: parseInt(parentId)
                    }
                }).progress(function (evt) {
                }).success(function (data, status, headers, config) {
                    self.loading = false;
                    notifierService.success("Item creado correctamente", ".");
                }).error(function (data, status, headers, config) {
                    announcementCreatorService.closeCreatorPopup();
                    notifierService.warning("Error al crear item", ".");
                });
            }
        };

        self.loadGenders = function () {
            var self = this;
            GenderApiService.getGenders(
                {}
                ,
                function (response) {
                    self.genderOptions = response.results;
                },
                function (error) {

                });
        };

        self.close = function () {
            announcementCreatorService.closeCreatorPopup();
        };

        self.validateFields = function () {
            if (self.name != undefined
                && self.description != undefined &&
                self.start_date != undefined &&
                self.end_date != undefined &&
                self.files.image != undefined) {
                return true;
            } else {
                return false;
            }
        };
        self.validateFieldsItem = function () {
            if (self.selectedItem.description != undefined
                && self.selectedItem.name != undefined &&
                self.selectedItem.gender != undefined) {
                return true;
            } else {
                return false;
            }
        };

        self.validateDate = function () {
            var today = new Date();
            var howDateStart = dates.compare(today, new Date(self.start_date));
            var howDateEnd = dates.compare(today, new Date(self.end_date));
            var howDateOk = dates.compare(new Date(self.start_date), new Date(self.end_date));
            if (howDateStart == -1 && howDateEnd == -1 && howDateOk == -1) {
                return true;
            } else {
                return false;
            }
        };

        self.loadGenders();

    }];

announcementCreatorModule.component('announcementCreator', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: AnnouncementCreatorController,
    controllerAs: 'ctrl',
    template: require('./announcementCreator.html')
});
