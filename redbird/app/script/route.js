app.config(function($routeProvider) {

    $routeProvider

    // main route
    .when('/', {
        title: 'Homepage',
        templateUrl: 'partials/main.html',
        resolve: {
            timing: function($timeout, $q) {
                var defer = $q.defer();
                $timeout(function() {
                    defer.resolve();
                }, 2000);
                return defer.promise;
            }
        }
    })

    // sample route
    .when('/sample', {
        title: 'No Wait Sample',
        templateUrl: 'partials/sample.html'
    })

    // contacts route
    .when('/details', {
        title: 'Details',
        controller: 'DetailsCtrl',
        templateUrl: 'partials/details.html',
        resolve: {
            timing: function($timeout, $q) {
                var defer = $q.defer();
                $timeout(function() {
                    defer.resolve();
                }, 2500);
                return defer.promise;
            }
        }
    })

})