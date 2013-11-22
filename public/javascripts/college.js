var CollegeUtil = {
    collegeCtrl: function ($scope, $stateParams, College) {
        $scope.collegePromise = College.get($stateParams.college);

        $scope.collegePromise.then(function (c) {
            $scope.college = c;
        });


    }
}