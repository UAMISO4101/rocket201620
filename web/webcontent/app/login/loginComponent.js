var loginModule = angular.module('loginModule');
var LoginController = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    //var self = this;
    //self.login = function () {
    //    console.log("entrando...");
    //};

    self.login = function(username, password) {
      return $http.post('http://192.168.0.3:8000/rest-auth/login/', {
          'username':username,
          'password':password,
      }).success(function(data) {
          $http.defaults.headers.common.Authorization = 'Token '
          + data.key; Account.authenticated = true;
          console.log("login success", data)
      })
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
