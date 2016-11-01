describe('Module to test: restorePassword', function () {
   var element;
    beforeEach(module('restorePasswordModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('restorePassword directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<restore-password></restore-password>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('restorePassword Controller', function () {
        var _restorePasswordController;
        beforeEach(function() {
            _restorePasswordController = element.controller('restorePassword');
        });
        it('should be Defined', inject(function () {
            expect(_restorePasswordController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('restorePassword Service', function () {

    });
});
