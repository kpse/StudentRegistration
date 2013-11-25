var AccommodationUtil = {
    imageOf: function (item, scope) {
        var result = _.find(scope.accommodations, function (a) {
            return a.name == item
        });
        return _.isUndefined(result) ? '' : result.imageUrl
    },

    accCtrl: function ($scope, $stateParams, College, Accommodation) {
        $scope.college = College().get({name: $stateParams.college}, function () {

            var refresh = function () {
                var accommodationPromise = Accommodation.all($scope.college.name);
                accommodationPromise.then(function (a) {
                    $scope.accommodations = a;
                });
            }

            refresh();

            $scope.$on('refresh_accommodation', function () {
                refresh();
            });
        });
        $scope.selectItem = function (selectedItem) {
            _($scope.accommodations).each(function (item) {
                item.selected = false;
                if (selectedItem === item) {
                    selectedItem.selected = true;
                }
            });
        };
    },
    buildingCtrl: function ($scope, College, $stateParams, Accommodation) {
        $scope.college = College().get({name: $stateParams.college}, function () {


            var accommodationPromise = Accommodation.all($scope.college.name);
            accommodationPromise.then(function (a) {
                $scope.accommodations = a;
                $scope.item = $stateParams.item;
                $scope.image = AccommodationUtil.imageOf($stateParams.item, $scope);
            });
        });
    },
    AddAccommodationCtrl: function ($scope, College, $stateParams, $rootScope, Accommodation) {
        $scope.college = College().get({name: $stateParams.college}, function () {


            $scope.create = function () {
                var promise = Accommodation.create({
                    name: $scope.name,
                    desc: $scope.name,
                    imageUrl: $scope.imageUrl
                }, $scope.college.name);
                promise.then(function () {
                    $rootScope.$broadcast('refresh_accommodation');
                    $scope.name = '';
                    $scope.imageUrl = '';
                });
            };
        });

    }

}
