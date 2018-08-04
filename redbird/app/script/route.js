app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
	    templateUrl: 'partials/main.html',
	    controller: 'MainCtrl'
      }).
      when('/detail', {
        templateUrl: 'partials/details.html',
	    controller: 'DetailsCtrl'
      })
}]);