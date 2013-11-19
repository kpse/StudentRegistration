// Jasmine test, see http://pivotal.github.com/jasmine/for more information
describe('app', function () {

    beforeEach(module('app'));

    describe('AccommodationCtrl', function () {

        var scope, ctrl, $httpBackend;

        beforeEach(
            inject(function (_$httpBackend_, $rootScope, $controller) {
                $httpBackend = _$httpBackend_;
                $httpBackend.expectGET('/accommodations').
                    respond([
                        {id: 1, name: 'a1', desc: "a1", imageUrl: "url1" },
                        {id: 2, name: 'a2', desc: "a2", imageUrl: "url2" }
                    ]);

                scope = $rootScope.$new();
                _.extend(scope, {accommodations: []})
                ctrl = $controller('AccommodationCtrl', {$scope: scope,
                    resolvedprop: {url: 'context'}});
            })
        );

        it('should create "accommodations" model with 2 accommodations fetched via xhr ', function () {
            expect(scope.accommodations.length).toBe(0); //notice that default state is not undefined, but empty!
            $httpBackend.flush();
            expect(scope.accommodations.length).toBe(2);
        });
    });

});