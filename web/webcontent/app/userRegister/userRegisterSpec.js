describe('Module to test: userRegister', function () {
   var element;
    beforeEach(module('userRegisterModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('userRegister directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<user-register></user-register>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('userRegister Controller', function () {
        var _userRegisterController;
        beforeEach(function() {
            _userRegisterController = element.controller('userRegister');
        });
        it('should be Defined', inject(function () {
            expect(_userRegisterController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('userRegister Service', function () {

    });
});
