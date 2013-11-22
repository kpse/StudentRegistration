var AccommodationUtil = {
    imageOf: function (item, scope) {
        var result = _.find(scope.accommodations, function (a) {
            return a.name == item
        });
        return _.isUndefined(result) ? '' : result.imageUrl
    },

    accCtrl: function ($scope, Accommodation) {

        var refresh = function(){
            var accommodationPromise = Accommodation.all();
            accommodationPromise.then(function (a) {
                $scope.accommodations = a;
            });
        }

        refresh();
        $scope.$on('refresh_accommodation', function(){
            refresh();
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


    buildingCtrl: function ($scope, $stateParams, Accommodation) {
        var accommodationPromise = Accommodation.all();
        accommodationPromise.then(function (a) {
            $scope.accommodations = a;
            $scope.item = $stateParams.item;
            $scope.image = AccommodationUtil.imageOf($stateParams.item, $scope);
        });
    },
    addAccommodationCtrl: function ($scope, $stateParams, $rootScope, Accommodation) {
        $scope.create = function () {
            var promise = Accommodation.create({
                name: $scope.name,
                desc: $scope.name,
                imageUrl: $scope.imageUrl
            });
            promise.then(function () {
                $rootScope.$broadcast('refresh_accommodation');
                $scope.name = '';
                $scope.imageUrl = '';
            });
        };

    }

}
