// Jasmine test, see http://pivotal.github.com/jasmine/for more information
describe('app', function () {

    beforeEach(module('app'));

    describe('CollegeCtrl', function () {

        var scope, ctrl, $httpBackend;

        beforeEach(
            inject(function ($q, _$httpBackend_, $rootScope, $controller) {
                $httpBackend = _$httpBackend_;
                $httpBackend.expectGET('/college').
                    respond(
                    {id: 1, name: 'MIT'}
                );

                $httpBackend.expectGET('/college/MIT/module').
                    respond([
                        {id: 1, name: 'mod1'}
                    ]);

                scope = $rootScope.$new();

                ctrl = $controller('CollegeCtrl', {$scope: scope});
            })
        );

        it('should create "college" model with data fetched via xhr ', function () {
            expect(scope.college).toBeDefined(); //notice that default state is not undefined, but empty!
            $httpBackend.flush();
            expect(scope.college.name).toBe('MIT');
        });
    });

});