function collegeUrl(name) {
    return '/college/' + name + '/module';
}
var moduleService = function ($http, $resource) {
    return function (collegeName) {
        return $resource(collegeUrl(collegeName) + '/:id',
            {id: '@id'}, {
                enable: {method: 'POST'}
            });
    };
}
