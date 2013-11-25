var collegeService = function ($resource) {
    return $resource('/college/:name', {name: '@name'});
};