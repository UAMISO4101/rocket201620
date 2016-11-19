describe('Module to test: userProfile', function () {
   var element;
    beforeEach(module('userProfileModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('userProfile directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<user-profile></user-profile>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('userProfile Controller', function () {
        var _userProfileController;
        beforeEach(function() {
            _userProfileController = element.controller('userProfile');
        });
        it('should be Defined', inject(function () {
            expect(_userProfileController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('userProfile Service', function () {

    });
});
