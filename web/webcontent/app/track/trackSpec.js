describe('Module to test: track', function () {
   var element;
    beforeEach(module('trackModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('track directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<track></track>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('track Controller', function () {
        var _trackController;
        beforeEach(function() {
            _trackController = element.controller('track');
        });
        it('should be Defined', inject(function () {
            expect(_trackController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('track Service', function () {

    });
});
