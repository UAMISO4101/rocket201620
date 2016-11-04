var userEditModule = angular.module('userEditModule');
var UserEditController = ['$i18n', '$freevenModal', 'userEditService', '$scope', 'userPasswordService',
    'Upload',
    function ($i18n, $freevenModal, userEditService, $scope, userPasswordService, Upload) {
        /**
         * Tip: add here only visual logic
         */

        var self = this;

        self.userEdit = userEditService;

        self.photoProfile = [];

        self.profileFiles = {};

        var img = {"img": self.userEdit.user.avatar}

        self.photoProfile.push(img);

        self.passwordOk = true;

        var photoOk;

        self.userEditPassword = userPasswordService;

        self.showEditPasswordPopup = function () {
            self.userEditPassword.showEditPopup();
        };

        self.close = function () {
            userEditService.closeModal();
        };

        self.validateForm = function () {
            if (self.userEdit.user === undefined) {
            } else {
                var typeUser = self.userEdit.user.is_artist;
                if ((typeUser == 'True') && self.passwordOk == true) {
                    var saveArtist = self.validateFieldsArtist();
                    if (saveArtist) {
                        self.uploadFilesAndData();
                        self.saveUser();
                    }
                }
                if ((typeUser == 'False') && self.passwordOk == true) {
                    var saveUser = self.validateFieldsUser();
                    if (saveUser) {
                        self.uploadFilesAndData();
                        self.saveUser();
                    }
                }
            }
        };

        self.validateFieldsArtist = function () {
            if (self.userEdit.user.first_name == undefined
                || self.userEdit.user.last_name == undefined
                || self.userEdit.user.username == undefined
                || self.userEdit.user.email == undefined
                || self.userEdit.user.is_artist == undefined
                || self.userEdit.user.artistic_name == undefined
                || self.userEdit.user.bank_account_number == undefined
                || self.userEdit.user.bank_account_type == undefined
                || self.userEdit.user.bank == undefined
                || self.userEdit.user.address == undefined
                || self.userEdit.user.city == undefined
                || self.userEdit.user.country == undefined
                || self.userEdit.user.telephone_number == undefined
                || self.userEdit.user.birth_date == undefined
            ) {
                return false
            } else {
                self.putPhotoProfile();
                return true
            }
        }

        self.validateFieldsUser = function () {
            if (self.userEdit.user.first_name == undefined
                || self.userEdit.user.last_name == undefined
                || self.userEdit.user.username == undefined
                || self.userEdit.user.email == undefined
                || self.userEdit.user.is_artist == undefined
            ) {
                return false
            } else {
                self.putPhotoProfile();
                return true
            }
        }


        self.saveUser = function () {
            self.userEdit.saveUser();
        };

        $scope.imageUpload = function (event) {
            self.photoProfile = [];
            var files = event.target.files;
            for (var i = 0; i < files.length; i++) {
                var file = files[i];

                var reader = new FileReader();
                reader.onload = $scope.imageIsLoaded;
                reader.readAsDataURL(file);

                photoOk = file;

            }
        }

        $scope.imageIsLoaded = function (e) {
            img = {}
            $scope.$apply(function () {
                //img = {"img": e.target.result};
                img = {"img": e.target.result};
                self.photoProfile.push(img);
            });
        }

        self.putPhotoProfile = function () {
            //self.userEdit.user.avatar = self.photoProfile[0].img;
        }

        self.attachFile = function (files, fieldName) {
            if (files && files.length > 0) {
                var file = files[0];
                self.profileFiles[fieldName] = file;
            }
        };
        self.uploadFilesAndData = function () {
            var self = this;

            if (self.profileFiles) {
                Upload.upload({
                    url: 'api/user/update_profile/',
                    fields: self.userEdit.user,
                    files: self.profileFiles
                }).progress(function (evt) {
                }).success(function (data, status, headers, config) {
                });
            }
        };


    }];

userEditModule.component('userEdit', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: UserEditController,
    controllerAs: 'ctrl',
    template: require('./userEdit.html')
});
