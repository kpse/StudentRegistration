var CollegeUtil = {
    collegeCtrl: function ($scope, $stateParams, College) {

        var promise = College.get($stateParams.college);
        promise.then(function (c) {
            $scope.college = c;
        });

    }
}