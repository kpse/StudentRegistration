function collegeUrl(name) {
    return '/college/' + name + '/module';
}
var moduleService = function ($http, $resource) {
    return function (collegeName) {
        return function (module) {
            return $resource(collegeUrl(collegeName) + '/:id',
                {id: module.id}, {
                    enable: {method: 'POST'}
                });
        }
    };
}

var modulesService = function ($http, $resource) {
    return function (collegeName) {
        return $resource(collegeUrl(collegeName));
    }
}