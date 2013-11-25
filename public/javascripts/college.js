var CollegeUtil = {
    collegeCtrl: function ($scope, $stateParams, College, Modules) {
        $scope.collegePromise = College.get($stateParams.college);

        $scope.collegePromise.then(function (c) {
            $scope.college = c;
            $scope.modules = Modules(c.name).query();
        })
        $scope.enabled = function(module){
            return module.enable;
        }
    }
}