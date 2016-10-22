var userRegisterModule = angular.module('userRegisterModule');
var UserRegisterController = ['$i18n', 'userRegisterService', '$freevenModal', function ($i18n, userRegisterService, $freevenModal) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;

    self.userRegister = userRegisterService;

    self.passwordOk = true;

    self.showAlert = function () {
        alert($i18n.translate.general_alert);
    };

    self.saveUser = function () {
        self.userRegister.saveUser();
    };

    self.validateForm = function () {
        if (self.userRegister.newUser === undefined) {
        } else {
            var typeUser = self.userRegister.newUser.is_artist;
            if (self.userRegister.newUser.password1 != self.userRegister.newUser.password2) {
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
        if (self.userRegister.newUser.first_name == undefined
            || self.userRegister.newUser.last_name == undefined
            || self.userRegister.newUser.username == undefined
            || self.userRegister.newUser.password1 == undefined
            || self.userRegister.newUser.password2 == undefined
            || self.userRegister.newUser.email == undefined
            || self.userRegister.newUser.is_artist == undefined
            || self.userRegister.newUser.artistic_name == undefined
            || self.userRegister.newUser.bank_account_number == undefined
            || self.userRegister.newUser.bank_account_type == undefined
            || self.userRegister.newUser.bank == undefined
            || self.userRegister.newUser.address == undefined
            || self.userRegister.newUser.city == undefined
            || self.userRegister.newUser.country == undefined
            || self.userRegister.newUser.telephone_number == undefined
            || self.userRegister.newUser.birth_date == undefined
            || self.userRegister.newUser.accept == undefined) {
            return false
        } else {
            return true
        }
    }

    self.validateFieldsUser = function () {
        if (self.userRegister.newUser.first_name == undefined
            || self.userRegister.newUser.last_name == undefined
            || self.userRegister.newUser.username == undefined
            || self.userRegister.newUser.password1 == undefined
            || self.userRegister.newUser.password2 == undefined
            || self.userRegister.newUser.email == undefined
            || self.userRegister.newUser.is_artist == undefined
            || self.userRegister.newUser.accept == undefined) {
            return false
        } else {
            return true
        }
    }

    self.closeRegisterPopup = function () {
        $freevenModal.closePopup();
    };

}];

userRegisterModule.component('userRegister', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: UserRegisterController,
    controllerAs: 'ctrl',
    template: require('./userRegister.html')
});
