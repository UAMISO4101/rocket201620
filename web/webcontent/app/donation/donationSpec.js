describe('Module to test: donation', function () {
   var element;
    beforeEach(module('donationModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('donation directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<donation></donation>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('donation Controller', function () {
        var _donationController;
        beforeEach(function() {
            _donationController = element.controller('donation');
        });
        it('should be Defined', inject(function () {
            expect(_donationController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('donation Service', function () {

    });
});
