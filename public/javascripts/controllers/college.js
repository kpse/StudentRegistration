var CollegeUtil = {
    collegeCtrl: function ($scope, $stateParams, College, Module) {
        $scope.college = College().get({name: $stateParams.college}, function () {
            $scope.modules = Module($scope.college.name).query(function () {
                $scope.modules = _.sortBy(_.filter($scope.modules, function (module) {
                    return module.enable;
                }), function (module) {
                    return module.displayIndex;
                });
            });
        });

    }
}