var app = angular.module("app", ['ui.router', 'ngResource']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('college', {
            url: '/college/:college',
            templateUrl: 'templates/college.html',
            controller: 'CollegeCtrl'
        })
        .state('college.individual', {
            url: '/individual',
            templateUrl: 'templates/app.html'
        })
        .state('college.accommodation', {
            url: '/accommodation',
            templateUrl: 'templates/list.html',
            controller: 'AccommodationCtrl'
        })
        .state('college.accommodation.item', {
            url: '/:item',
            templateUrl: 'templates/accommodation.building.html',
            controller: 'SingleBuildingCtrl'
        })
        .state('college.wip', {
            url: '/wip',
            template: '<div>Sorry, we are still in Building...</div>'
        })

    $urlRouterProvider.otherwise(
        function ($injector, $location) {
            var path = $location.path();
            path.indexOf("college") < 0 ?
                $location.path('/college/jiaotong') :
                $location.path(path.replace(/(college\/[^/]+)\/.+$/g, '$1/wip'));
        });
})

app.controller({
    'AccommodationCtrl': AccommodationUtil.accCtrl,
    'SingleBuildingCtrl': AccommodationUtil.buildingCtrl,
    'CollegeCtrl': CollegeUtil.collegeCtrl
})

app.factory('Accommodation', accommodationService)
    .factory('College', collegeService)
    .factory('Modules', modulesService);