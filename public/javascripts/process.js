var ProcessUtil = {
    processChangeCtrl: function ($scope, Module, Modules, $location, $resource) {
        $scope.collegePromise.then(function (c) {
            $scope.college = c;
            $scope.modules = Modules($scope.college.name).query();
            $scope.module = Module($scope.college.name);
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

        $scope.goModuleConfig = function (module) {
            if($scope.movingItem === module) return;
            var url = module.url;
            $location.path('/college/' + $scope.college.name + '/studentPlatform/' + url);
        }

        $scope.update = function (modules) {
            _.every(modules, function (m) {
                var module = $scope.module(m);
                return module.enable({id: m.id, enable: m.enable});
            });
        }
    }
}
