describe('AccommodationUtil', function () {

    it('should create "accommodations" model with 2 accommodations fetched via xhr ', function () {
        var url = AccommodationUtil.imageOf("item", {accommodations: [
            {name: "item", imageUrl: "url"}
        ]});
        expect(url).toBe("url");
    });
});/**
 * Created with IntelliJ IDEA.
 * User: twer
 * Date: 11/20/13
 * Time: 12:26 AM
 * To change this template use File | Settings | File Templates.
 */
