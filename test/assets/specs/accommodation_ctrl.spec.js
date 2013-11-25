// Jasmine test, see http://pivotal.github.com/jasmine/for more information
describe('app', function () {

    beforeEach(module('app'));

    describe('AccommodationCtrl', function () {

        var scope, ctrl, $httpBackend;

        beforeEach(
            inject(function ($q, _$httpBackend_, $rootScope, $controller) {
                $httpBackend = _$httpBackend_;
                $httpBackend.expectGET('/college').
                    respond(
                        {id: 1, name: 'some'}
                    );
                $httpBackend.expectGET('/college/some/accommodation').
                    respond([
                        {id: 1, name: 'a1', desc: "a1", imageUrl: "url1", collegeId: 1 },
                        {id: 2, name: 'a2', desc: "a2", imageUrl: "url2", collegeId: 1 }
                    ]);

                scope = $rootScope.$new();
                var deferred = $q.defer();
                var promise = deferred.promise;
                deferred.resolve({name: 'some'})
                _.extend(scope, {accommodations: [],
                    collegePromise: promise});
                ctrl = $controller('AccommodationCtrl', {$scope: scope});
            })
        );

        it('should create "accommodations" model with 2 accommodations fetched via xhr ', function () {
            expect(scope.accommodations.length).toBe(0); //notice that default state is not undefined, but empty!
            $httpBackend.flush();
            expect(scope.accommodations.length).toBe(2);
        });
    });

});