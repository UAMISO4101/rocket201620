describe('Module to test: userPassword', function () {
   var element;
    beforeEach(module('userPasswordModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('userPassword directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<user-password></user-password>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('userPassword Controller', function () {
        var _userPasswordController;
        beforeEach(function() {
            _userPasswordController = element.controller('userPassword');
        });
        it('should be Defined', inject(function () {
            expect(_userPasswordController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('userPassword Service', function () {

    });
});
