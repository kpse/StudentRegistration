var accommodationService = function ($http) {
    var Accommodation = function (data) {
        angular.extend(this, data);
    }

    function collegeUrl(name){
      return '/college/'+ name +'/accommodation/';
    }

    Accommodation.get = function (id, collegeName) {
        return $http.get(collegeUrl(collegeName) + id).then(function (response) {
            return new Accommodation(response.data);
        });
    };

    Accommodation.create = function (acc, collegeName) {
        var accommodation = acc;
        return $http.post(collegeUrl(collegeName), acc).then(function (response) {
            accommodation.id = response.data.id;
            return accommodation;
        });
    }

    Accommodation.all = function (collegeName) {
        return $http.get(collegeUrl(collegeName)).then(function (response) {
            return _.map(response.data, function (data) {
                return new Accommodation(data);
            })
        });
    }

    return Accommodation;
};