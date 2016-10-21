describe('Module to test: main', function () {
  var element;
  beforeEach(module('mainModule'));
  beforeEach(module('pascalprecht.translate'));
  /***
   * Test for directive
   * */
  describe('main directive', function () {
    var $compile,
      $rootScope;
    beforeEach(inject(function (_$compile_, _$rootScope_) {
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));
    it('Replaces the element with the appropriate content', function () {
      // Compile a piece of HTML containing the directive
      element = $compile('<main></main>')($rootScope);
      $rootScope.$digest();
      // Check that the compiled element contains the templated content
    });
  });
  /***
   * Test for controller
   * */
  describe('main Controller', function () {
    var _mainController;

    beforeEach(function () {
      _mainController = element.controller('main');
    });
    it('should be Defined', inject(function () {

      expect(_mainController).toBeDefined();
    }));
  });
  /***
   * Test for service
   * */
  describe('main Service', function () {

  });
});
