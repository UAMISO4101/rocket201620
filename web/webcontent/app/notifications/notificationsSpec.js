describe('Module to test: notifications', function () {
    beforeEach(module('notifierModule'));
    beforeEach(
        module(function ($provide) {
            $provide.service('$q', function () {
                this.reject = jasmine.createSpy('reject');
            });
        }));
    /***
     * Test for service
     ***/
    describe('notifications Service', function () {
        var _notifierService;
        var _growl;
        it('Should get an instance of the factory', inject(function (notifierService, growl) {
            _notifierService = notifierService;
            _growl = growl;
            expect(growl).toBeDefined();

        }));
        it('Should call growl success', inject(function () {
            spyOn(_growl, 'success');
            _notifierService.success('title','text');
            expect(_growl.success).toHaveBeenCalled();
        }));
        it('Should call growl info ', inject(function () {
            spyOn(_growl, 'info');
            _notifierService.info('title','text');
            expect(_growl.info).toHaveBeenCalled();
        }));
        it('Should call growl warning', inject(function () {
            spyOn(_growl, 'warning');
            _notifierService.warning('title','text');
            expect(_growl.warning).toHaveBeenCalled();
        }));
        it('Should call growl error', inject(function () {
            spyOn(_growl, 'error');
            _notifierService.error('title','text');
            expect(_growl.error).toHaveBeenCalled();
        }));
    });
    /***
     * Test for interceptor
     ***/
    describe('notifications interceptor', function () {
        var _notifierInterceptor;
        var _q;
        var _notifierService;
        var getMockRejection = function (status) {
            return {
                statusText: 'status text',
                status: status,
                config: {
                    skipResponseInterceptor: false,
                    url: 'test.html'
                }
            };
        };
        it('Should get an instance of the factory', inject(function (notifierInterceptor, $q, notifierService) {
            _notifierInterceptor = notifierInterceptor;
            _q = $q;
            _notifierService = notifierService;
            expect(_notifierInterceptor).toBeDefined();
        }));
        it('Should intercept request', inject(function () {
            var congfig = {
                url: 'test.json'
            };
            _notifierInterceptor.request(congfig);
        }));
        it('Should intercept responseError - skipResponseInterceptor', inject(function () {
            var rejection = getMockRejection(400);
            rejection.config.skipResponseInterceptor = true;
            _notifierInterceptor.responseError(rejection);
            expect(_q.reject).toHaveBeenCalled();
        }));
        it('Should intercept responseError - 400', inject(function () {
            var rejection = getMockRejection(400);
            spyOn(_notifierService, 'error');
            _notifierInterceptor.responseError(rejection);
            expect(_notifierService.error).toHaveBeenCalled();
            expect(_q.reject).toHaveBeenCalled();
        }));
        it('Should intercept responseError - 401', inject(function () {
            var rejection = getMockRejection(401);
            spyOn(_notifierService, 'warning');
            _notifierInterceptor.responseError(rejection);
            expect(_notifierService.warning).toHaveBeenCalled();
            expect(_q.reject).toHaveBeenCalled();
        }));
        it('Should intercept responseError - 404', inject(function () {
            var rejection = getMockRejection(404);
            spyOn(_notifierService, 'warning');
            _notifierInterceptor.responseError(rejection);
            expect(_notifierService.warning).toHaveBeenCalled();
            expect(_q.reject).toHaveBeenCalled();
        }));
        it('Should intercept responseError - 500', inject(function () {
            var rejection = getMockRejection(500);
            spyOn(_notifierService, 'error');
            _notifierInterceptor.responseError(rejection);
            expect(_notifierService.error).toHaveBeenCalled();
            expect(_q.reject).toHaveBeenCalled();
        }));
    });
});
