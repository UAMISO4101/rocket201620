describe('Module to test: splash', function () {
   var element;
    beforeEach(module('splashModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('splash directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<splash></splash>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('splash Controller', function () {
        var _splashController;
        beforeEach(function() {
            _splashController = element.controller('splash');
        });
        it('should be Defined', inject(function () {
            expect(_splashController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('splash Service', function () {

    });
});
