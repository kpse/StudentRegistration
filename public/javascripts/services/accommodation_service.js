var accommodationService = function ($http) {
    // Book is a class which we can use for retrieving and
    // updating data on the server
    var Accommodation = function (data) {
        angular.extend(this, data);
    }

    // a static method to retrieve Book by ID
    Accommodation.get = function (id) {
        return $http.get('/accommodations/' + id).then(function (response) {
            return new Accommodation(response.data);
        });
    };

    // an instance method to create a new Book
    Accommodation.create = function (acc) {
        var accommodation = acc;
        return $http.post('/accommodations', acc).then(function (response) {
            accommodation.id = response.data.id;
            return accommodation;
        });
    }

    Accommodation.all = function () {
        return $http.get('/accommodations').then(function (response) {
            return _.map(response.data, function (data) {
                return new Accommodation(data);
            })
        });
    }

    return Accommodation;
};