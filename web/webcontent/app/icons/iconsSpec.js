describe('Module to test: icons', function () {
   var element;
    beforeEach(module('iconsModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('icons directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<icons></icons>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('icons Controller', function () {
        var _iconsController;
        beforeEach(function() {
            _iconsController = element.controller('icons');
        });
        it('should be Defined', inject(function () {
            expect(_iconsController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('icons Service', function () {

    });
});
