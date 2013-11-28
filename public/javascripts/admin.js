var admin = angular.module("admin", ['ui.router', 'ngDragDrop', 'ngResource']);

admin.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('college', {
            url: '/college/:college',
            templateUrl: 'templates/admin_page.html',
            controller: 'CollegeCtrl'
        })
        .state('college.studentPlatform', {
            url: '/studentPlatform',
            templateUrl: 'templates/process.html',
            controller: 'ProcessChangeCtrl'
        })
        .state('college.accommodation', {
            url: '/studentPlatform/accommodation',
            templateUrl: 'templates/admin_list.html',
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


admin.controller({
    'AccommodationCtrl': AccommodationUtil.accCtrl,
    'SingleBuildingCtrl': AccommodationUtil.buildingImageCtrl,
    'AddAccommodationCtrl': AccommodationUtil.AddAccommodationCtrl,
    'CollegeCtrl': CollegeUtil.collegeCtrl,
    'ProcessChangeCtrl': ProcessUtil.processChangeCtrl
})

admin.factory('Accommodation', accommodationService)
    .factory('College', collegeService)
    .factory('Module', moduleService);