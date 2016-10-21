describe('Module to test: userPanel', function () {
   var element;
    beforeEach(module('userPanelModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('userPanel directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<user-panel></user-panel>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('userPanel Controller', function () {
        var _userPanelController;
        beforeEach(function() {
            _userPanelController = element.controller('userPanel');
        });
        it('should be Defined', inject(function () {
            expect(_userPanelController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('userPanel Service', function () {

    });
});
