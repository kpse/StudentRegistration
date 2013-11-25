var moduleService = function ($resource) {
    return $resource('/college/:college/module/:id',
        {id: '@id', college: '@college'}, {
            enable: {method: 'POST'}
        });
}
