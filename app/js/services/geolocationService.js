function GeolocationService($q, $window) {
  'ngInject';

  const service = {};

  service.getCurrentPosition = function() {
    var deferred = $q.defer();
    if (!$window.navigator.geolocation) {
      deferred.reject('Geolocation not supported.');
    } else {
      $window.navigator.geolocation.getCurrentPosition(
        function (position) {
            deferred.resolve(position);
        },
        function (err) {
            deferred.reject(err);
        }
      );
    }
    return deferred.promise;
  }

  return service;
}

export default {
  name: 'GeolocationService',
  fn: GeolocationService
};
