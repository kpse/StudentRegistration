describe('AccommodationUtil', function () {

    it('should pick up image URL from accommodations ', function () {
        var url = AccommodationUtil.imageOf("item", {accommodations: [
            {name: "item", imageUrl: "url"}
        ]});
        expect(url).toBe("url");
    });
})
