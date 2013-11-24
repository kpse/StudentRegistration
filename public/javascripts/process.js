var ProcessUtil = {
    processChangeCtrl: function ($scope, Module, $location) {
        $scope.collegePromise.then(function (c) {
            $scope.college = c;
            $scope.modulesPromise = Module.all($scope.college.name);
            $scope.modulesPromise.then(function (m) {
                $scope.modules = m;
            })
        });

        $scope.enabled = function (module) {
            return module.enable;
        }

        $scope.disabled = function (module) {
            return !module.enable;
        }

        $scope.enableModule = function () {
            $scope.movingItem.enable = true;
        }

        $scope.disableModule = function () {
            $scope.movingItem.enable = false;
        }

        $scope.startDrag = function (event, ui, item, index) {
            $scope.movingItem = item;
        }

        $scope.goModuleConfig = function(url) {
            $location.path('/college/' + $scope.college.name +'/studentPlatform/' + url);
        }
    }
}
