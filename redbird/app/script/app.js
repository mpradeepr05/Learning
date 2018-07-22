var app =  angular.module('app', ['ngRoute','angular-page-loader','ui.bootstrap']);
app.controller('MainCtrl', function($scope, $route, $location) {

    $scope.routesList = [];

    angular.forEach($route.routes, function(route, ind) {

        if( route.title ) {
            $scope.routesList.push(route);
        }

    })


    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = "wide" + parseInt(slides.length+1);
        slides.push({
        image: '//themenesia.com/themeforest/archi-light/images-slider/' + newWidth + '.jpg',
        text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
        id: currIndex++
        });
    };

    

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }


    window.onscroll = function(){
        var scrollPosY = window.pageYOffset | document.body.scrollTop;
        var headerFx = document.getElementById("header");
        if (scrollPosY > 100) {
            headerFx.classList.add("headerfx")
        }
        else{
            headerFx.classList.remove("headerfx")
        }


        var scrollPosY = window.pageYOffset | document.body.scrollTop;
        var secId = document.getElementsByClassName("wow")
        for (var i = 0; i < secId.length; i++) {
            var xyz = secId[i]
            var xb = xyz.offsetTop
            var xy = xyz.offsetParent.offsetTop
            if (xb+xy-scrollPosY-window.innerHeight + 50 <= 0){
                xyz.classList.add("in-view");
            }
        }
    }


})

angular.module('app').controller('DetailsCtrl', function($scope) {

    $scope.myInput = {
        name: 'Filippo',
        surname: 'Conti'
    }
})