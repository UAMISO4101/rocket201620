describe('Module to test: help', function () {
   var element;
    beforeEach(module('helpModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('help directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<help></help>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('help Controller', function () {
        var _helpController;
        beforeEach(function() {
            _helpController = element.controller('help');
        });
        it('should be Defined', inject(function () {
            expect(_helpController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('help Service', function () {

    });
});
