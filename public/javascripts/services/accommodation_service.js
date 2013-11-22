var accommodationService = function ($http) {
    // Book is a class which we can use for retrieving and
    // updating data on the server
    var Accommodation = function (data) {
        angular.extend(this, data);
    }

    function collegeUrl(name){
      return '/college/'+ name;
    }

    // a static method to retrieve Book by ID
    Accommodation.get = function (id, collegeName) {
        return $http.get(collegeUrl(collegeName) +'/accommodation/' + id).then(function (response) {
            return new Accommodation(response.data);
        });
    };

    // an instance method to create a new Book
    Accommodation.create = function (acc, collegeName) {
        var accommodation = acc;
        return $http.post(collegeUrl(collegeName) + '/accommodation', acc).then(function (response) {
            accommodation.id = response.data.id;
            return accommodation;
        });
    }

    Accommodation.all = function (collegeName) {
        return $http.get(collegeUrl(collegeName) + '/accommodation').then(function (response) {
            return _.map(response.data, function (data) {
                return new Accommodation(data);
            })
        });
    }

    return Accommodation;
};