var ProcessUtil = {
    processChangeCtrl: function ($scope, Module, College, $stateParams, $location, $resource) {
        $scope.college = College.get({name: $stateParams.college}, function () {
            $scope.modules = Module.bind({college: $scope.college.name}).query();
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
            if ($scope.movingItem === module) return;
            var url = module.url;
            $location.path('/college/' + $scope.college.name + '/studentPlatform/' + url);
        }

        $scope.update = function (modules) {
            _.every(modules, function (m) {
                return Module.bind({college: $scope.college.name}).enable({id: m.id, enable: m.enable});
            });
        }
    }
}
