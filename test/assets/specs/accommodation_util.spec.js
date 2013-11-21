describe('AccommodationUtil', function () {

    it('should create "accommodations" model with 2 accommodations fetched via xhr ', function () {
        var url = AccommodationUtil.imageOf("item", {accommodations: [
            {name: "item", imageUrl: "url"}
        ]});
        expect(url).toBe("url");
    });
})
