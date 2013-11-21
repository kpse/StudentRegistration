var admin = angular.module("admin", ['ui.router']);

admin.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('studentPlatform', {
            url: '/studentPlatform',
            templateUrl: 'templates/admin_list.html',
            controller: 'AccommodationCtrl', resolve: {
                resolvedprop: [function () {
                    return {url: '#/studentPlatform' }
                }]
            }
        })
        .state('studentPlatform.item', {
            url: '/:item',
            templateUrl: 'templates/accommodation.building.html',
            controller: 'SingleBuildingCtrl'
        })
        .state('wip', {
            url: '/wip',
            template: '<div>Sorry, we are still in Building...</div>'
        })

    $urlRouterProvider.otherwise('/wip')
})


admin.controller({
    'AccommodationCtrl': AccommodationUtil.accCtrl,
    'SingleBuildingCtrl': AccommodationUtil.buildingCtrl,
    'addAccommodationCtrl': AccommodationUtil.addAccommodationCtrl
})

angular.module('admin').factory('Accommodation', accommodationService)
    .factory('Colleges', collegeService);

admin.directive('college', collegeDirective)