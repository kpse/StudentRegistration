var admin = angular.module("admin", ['ui.router']);

admin.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('college', {
            url: '/college/:college',
            templateUrl: 'templates/admin_page.html',
            controller: 'CollegeCtrl'
        })
        .state('college.studentPlatform', {
            url: '/studentPlatform/accommodation',
            templateUrl: 'templates/admin_list.html',
            controller: 'AccommodationCtrl'
        })
        .state('college.studentPlatform.item', {
            url: '/:item',
            templateUrl: 'templates/accommodation.building.html',
            controller: 'SingleBuildingCtrl'
        })
        .state('college.wip', {
            url: '/wip',
            template: '<div>Sorry, we are still in Building...</div>'
        })

    $urlRouterProvider.otherwise('/college/jiaotong/wip')
})


admin.controller({
    'AccommodationCtrl': AccommodationUtil.accCtrl,
    'SingleBuildingCtrl': AccommodationUtil.buildingCtrl,
    'addAccommodationCtrl': AccommodationUtil.addAccommodationCtrl,
    'CollegeCtrl': CollegeUtil.collegeCtrl
})

admin.factory('Accommodation', accommodationService)
    .factory('College', collegeService);
