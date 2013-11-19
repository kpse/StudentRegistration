var app = angular.module("app", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('individual', {
            url: '/individual',
            templateUrl: 'templates/app.html'
        })
        .state('accommodation', {
            url: '/accommodation',
            templateUrl: 'templates/list.html',
            controller: 'AccommodationCtrl', resolve: {
                resolvedprop: [function () {
                    return {url: '/#/accommodation' }
                }]
            }
        })
        .state('accommodation.item', {
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

app.controller({
    'AccommodationCtrl': AccommodationUtil.accCtrl,
    'SingleBuildingCtrl': AccommodationUtil.buildingCtrl
})

angular.module('app').factory('Accommodation', accommodationService);
