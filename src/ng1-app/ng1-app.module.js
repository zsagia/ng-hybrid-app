angular.module('ng1App', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        component: 'ng1Main'
      })
      .state('full', {
        url: '/full',
        component: 'fullNg2Page'
      });

    $urlRouterProvider.otherwise('/');
  });