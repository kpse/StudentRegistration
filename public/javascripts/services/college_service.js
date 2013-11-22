var collegeService = function ($http) {
    var College = function (data) {
        angular.extend(this, data);
    }

    College.get = function (name) {
        return $http.get('/college/' + name).then(function (response) {
            return new College(response.data);
        });
    };

    return College;
};