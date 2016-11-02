describe('Module to test: bounce', function () {
   var element;
    beforeEach(module('bounceModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('bounce directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<bounce></bounce>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('bounce Controller', function () {
        var _bounceController;
        beforeEach(function() {
            _bounceController = element.controller('bounce');
        });
        it('should be Defined', inject(function () {
            expect(_bounceController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('bounce Service', function () {

    });
});
