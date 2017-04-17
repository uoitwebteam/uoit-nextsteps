function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider, uiGmapGoogleMapApiProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
  .state('Home', {
    url: '/?l',
    controller: 'MainCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  });

  $urlRouterProvider.otherwise('/');

  uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
    v: '3.23', //defaults to latest 3.X anyhow
    libraries: 'geometry'
  });
}

export default OnConfig;
