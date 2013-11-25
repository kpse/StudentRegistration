var collegeService = function ($http, $resource) {
    return function () {
        return $resource('/college/:name', {name: '@name'});
    }

};