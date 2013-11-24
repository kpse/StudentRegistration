var CollegeUtil = {
    collegeCtrl: function ($scope, $stateParams, College, Module) {
        $scope.collegePromise = College.get($stateParams.college);

        $scope.collegePromise.then(function (c) {
            $scope.college = c;
            $scope.modulesPromise = Module.all($scope.college.name);
            $scope.modulesPromise.then(function (m) {
                $scope.modules = _.sortBy(_.filter(m, function (module) {
                    return module.enable;
                }), function (module) {
                    return module.displayIndex;
                });
            })
        });


    }
}