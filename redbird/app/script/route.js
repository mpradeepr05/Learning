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
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
	    controller: 'DetailsCtrl'
      }).
      when('/sales-spare', {
        templateUrl: 'partials/sales-spare.html',
	    controller: 'DetailsCtrl'
      }).
      when('/consulting', {
        templateUrl: 'partials/consulting.html',
	    controller: 'DetailsCtrl'
      }).
      when('/staffing', {
        templateUrl: 'partials/staffing.html',
	    controller: 'DetailsCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
	    controller: 'DetailsCtrl'
      })
}]);