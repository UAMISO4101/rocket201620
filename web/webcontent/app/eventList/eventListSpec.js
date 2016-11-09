describe('Module to test: eventList', function () {
   var element;
    beforeEach(module('eventListModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('eventList directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<event-list></event-list>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('eventList Controller', function () {
        var _eventListController;
        beforeEach(function() {
            _eventListController = element.controller('eventList');
        });
        it('should be Defined', inject(function () {
            expect(_eventListController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('eventList Service', function () {

    });
});
