var accommodationService = function ($resource) {
    return $resource('/college/:college/accommodation/:id', {college: '@college', id: '@id'});
}