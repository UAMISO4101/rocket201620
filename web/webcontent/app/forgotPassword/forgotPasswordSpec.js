describe('Module to test: forgotPassword', function () {
   var element;
    beforeEach(module('forgotPasswordModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('forgotPassword directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<forgot-password></forgot-password>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('forgotPassword Controller', function () {
        var _forgotPasswordController;
        beforeEach(function() {
            _forgotPasswordController = element.controller('forgotPassword');
        });
        it('should be Defined', inject(function () {
            expect(_forgotPasswordController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('forgotPassword Service', function () {

    });
});
