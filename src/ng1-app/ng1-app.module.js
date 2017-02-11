angular.module('ng1App', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('todoPage', {
        url: '/todo',
        component: 'todoPage'
      })
      .state('other', {
        url: '/other',
        component: 'ng1Main'
      });

    $urlRouterProvider.otherwise('/todo');
  });