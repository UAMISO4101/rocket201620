var announcementCreatorModule = angular.module('announcementCreatorModule');
var AnnouncementCreatorController = ['Upload', 'mainService', 'announcementCreatorService', 'notifierService', '$q', 'GenderApiService', '$filter',
    function (Upload, mainService, announcementCreatorService, notifierService, $q, GenderApiService, $filter) {
        var self = this;
        self.files = {};
        self.loading = false;
        self.items = [];
        self.selectedItem = {};
        self.showItem = false;
        self.attachFile = function (files, fieldName) {
            if (files && files.length > 0) {
                var file = files[0];
                self.files[fieldName] = file;
            }
        };
        self.showItemView = function () {
            var self = this;
            self.showItem = true;
        };

        self.addItem = function () {
            var self = this;
            self.items.push(JSON.parse(JSON.stringify(self.selectedItem)));
            self.selectedItem = {};
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
