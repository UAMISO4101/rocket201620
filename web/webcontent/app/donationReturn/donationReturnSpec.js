describe('Module to test: donationReturn', function () {
   var element;
    beforeEach(module('donationReturnModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('donationReturn directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<donation-return></donation-return>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('donationReturn Controller', function () {
        var _donationReturnController;
        beforeEach(function() {
            _donationReturnController = element.controller('donationReturn');
        });
        it('should be Defined', inject(function () {
            expect(_donationReturnController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('donationReturn Service', function () {

    });
});
