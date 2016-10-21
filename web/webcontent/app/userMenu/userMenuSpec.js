describe('Module to test: userMenu', function () {
   var element;
    beforeEach(module('userMenuModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('userMenu directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<user-menu></user-menu>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('userMenu Controller', function () {
        var _userMenuController;
        beforeEach(function() {
            _userMenuController = element.controller('userMenu');
        });
        it('should be Defined', inject(function () {
            expect(_userMenuController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('userMenu Service', function () {

    });
});
