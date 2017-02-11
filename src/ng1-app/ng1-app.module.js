angular.module('ng1App', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        component: 'ng1Main'
      })
      .state('todoPage', {
        url: '/todo',
        component: 'todoPage'
      });

    $urlRouterProvider.otherwise('/');
  });