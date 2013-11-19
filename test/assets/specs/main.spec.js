// Jasmine test, see http://pivotal.github.com/jasmine/for more information
describe('app', function () {

    // Run test
    describe('appCtrl', function () {
        function imageOf(item, scope) {
            var result = _.find(scope.accommodations, function (a) {
                return a.name == item
            });
            return _.isUndefined(result) ? '' : result.imageUrl
        }

        it('should create "accommodations" model with 2 accommodations fetched via xhr ', function () {
            var url = imageOf("item", {accommodations: [
                {name: "item", imageUrl: "url"}
            ]});
            expect(url).toBe("url");
        });
    });
});



