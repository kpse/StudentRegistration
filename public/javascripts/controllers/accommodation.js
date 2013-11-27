var AccommodationUtil = {
    imageOf: function (item, scope) {
        var result = _.find(scope.accommodations, function (a) {
            return a.name == item
        });
        return _.isUndefined(result) ? '' : result.imageUrl
    },

    accCtrl: function ($scope, $stateParams, College, Accommodation, Module, $location) {
        $scope.college = College.get({name: $stateParams.college}, function () {
            $scope.modules = Module.bind({college: $scope.college.name}).query(function () {
                var enabled = _.any($scope.modules, function (m) {
                    return m.url == 'accommodation' && m.enable
                });
                if (!enabled) $location.path('/college/' + $scope.college.name);
            });
            $scope.accommodations = Accommodation.bind({college: $scope.college.name}).query();
        });

        $scope.selectItem = function (selectedItem) {
            _.each($scope.accommodations, function (item) {
                item.selected = false;
                if (selectedItem === item) {
                    selectedItem.selected = true;
                }
            });
        };
    },

    buildingCtrl: function ($scope, College, $stateParams, Accommodation) {
        $scope.college = College.get({name: $stateParams.college}, function () {
            $scope.accommodations = Accommodation.bind({college: $scope.college.name}).query(function () {
                $scope.item = $stateParams.item;
                $scope.image = AccommodationUtil.imageOf($stateParams.item, $scope);
            });
        });
    },

    AddAccommodationCtrl: function ($scope, College, $stateParams, $rootScope, Accommodation, $resource) {
        $scope.college = College.get({name: $stateParams.college}, function () {

            $scope.create = function () {
                var acc = new Accommodation();
                acc.name = $scope.name;
                acc.desc = $scope.name;
                acc.imageUrl = $scope.imageUrl;
                acc.college = $scope.college.name;


                acc.$save(function () {
                    $scope.accommodations.push(acc);
                    $scope.name = '';
                    $scope.imageUrl = '';
                });

            };
        });

    }

}
