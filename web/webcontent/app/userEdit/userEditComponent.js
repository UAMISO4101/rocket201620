var userEditModule = angular.module('userEditModule');
var UserEditController = ['$i18n', '$freevenModal', 'userEditService', '$scope',
    function ($i18n, $freevenModal, userEditService, $scope) {
        /**
         * Tip: add here only visual logic
         */

        var self = this;

        self.userEdit = userEditService;

        self.photoProfile = [];

        self.passwordOk = true;

        self.validateForm = function () {
            if (self.userEdit.user === undefined) {
            } else {
                var typeUser = self.userEdit.user.is_artist;
                if (self.userEdit.user.password1 != self.userEdit.user.password2) {
                    self.passwordOk = false;
                } else {
                    self.passwordOk = true;
                }
                if ((typeUser == 'True') && self.passwordOk == true) {
                    var saveArtist = self.validateFieldsArtist();
                    if (saveArtist) {
                        self.saveUser();
                    }
                }
                if ((typeUser == 'False') && self.passwordOk == true) {
                    var saveUser = self.validateFieldsUser();
                    if (saveUser) {
                        self.saveUser();
                    }
                }
            }
        };

        self.validateFieldsArtist = function () {
            if (self.userEdit.user.first_name == undefined
                || self.userEdit.user.last_name == undefined
                || self.userEdit.user.username == undefined
                || self.userEdit.user.password1 == undefined
                || self.userEdit.user.password2 == undefined
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
                || self.userEdit.user.password1 == undefined
                || self.userEdit.user.password2 == undefined
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

        self.closeEditPopup = function () {
            $freevenModal.closePopup();
        };

        $scope.imageUpload = function (event) {
            self.photoProfile = [];
            var files = event.target.files;
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var reader = new FileReader();
                reader.onload = $scope.imageIsLoaded;
                reader.readAsDataURL(file);
            }
        }

        $scope.imageIsLoaded = function (e) {
            $scope.$apply(function () {
                var img = {"img": e.target.result};
                self.photoProfile.push(img);
            });
        }

        self.putPhotoProfile = function () {
        }

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
