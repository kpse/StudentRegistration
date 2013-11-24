var moduleService = function ($http) {
    var Module = function (data) {
        angular.extend(this, data);
    }

    function collegeUrl(name) {
        return '/college/' + name + '/module';
    }


    Module.all = function (collegeName) {
        return $http.get(collegeUrl(collegeName)).then(function (response) {
            return _.map(response.data, function (data) {
                return new Module(data);
            })
        });
    };

    return Module;
};