describe('Module to test: userEdit', function () {
   var element;
    beforeEach(module('userEditModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('userEdit directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<user-edit></user-edit>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('userEdit Controller', function () {
        var _userEditController;
        beforeEach(function() {
            _userEditController = element.controller('userEdit');
        });
        it('should be Defined', inject(function () {
            expect(_userEditController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('userEdit Service', function () {

    });
});
