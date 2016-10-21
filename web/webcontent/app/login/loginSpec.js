describe('Module to test: login', function () {
   var element;
    beforeEach(module('loginModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('login directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<login></login>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('login Controller', function () {
        var _loginController;
        beforeEach(function() {
            _loginController = element.controller('login');
        });
        it('should be Defined', inject(function () {
            expect(_loginController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('login Service', function () {

    });
});
