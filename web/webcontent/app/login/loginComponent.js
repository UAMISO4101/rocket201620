var loginModule = angular.module('loginModule');
var LoginController = ['$i18n', 'loginService', '$freevenModal', function ($i18n, loginService, $freevenModal) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;

    self.userLogin = {};


    self.login = function () {

        console.log("Entrando a Login");
        console.log(self.userLogin)


        /*return $http.post('http://192.168.0.3:8000/rest-auth/login/', {
         'username':username,
         'password':password,
         }).success(function(data) {
         $http.defaults.headers.common.Authorization = 'Token '
         + data.key; Account.authenticated = true;
         console.log("login success", data)
         })*/
    };

    self.closeLoginPopup = function () {
        $freevenModal.closePopup();
    };
}];

loginModule.component('login', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: LoginController,
    controllerAs: 'ctrl',
    template: require('./login.html')
});
