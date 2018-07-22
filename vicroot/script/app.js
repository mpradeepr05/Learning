var app =  angular.module('app', ['ngAnimate','ngRoute','angular-page-loader','ui.bootstrap']);
app.controller('MainCtrl', function($scope, $route, $location) {

    $scope.routesList = [];

    angular.forEach($route.routes, function(route, ind) {

        if( route.title ) {
            $scope.routesList.push(route);
        }

    })


    $scope.myInterval = 50;
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




    // Service
    // $scope.sTabs = [
    //     {"Title":"Meet & Agree"},
    //     {"Title":"Idea & Concept"},
    //     {"Title":"Design & Create"},
    //     {"Title":"Build & Install"},
    // ],

    // $scope.serviceContents = [
    //     {"Description":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam."},
    //     {"Description":"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam."},
    //     {"Description":"Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam."},
    //     {"Description":"Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam."},
    // ];
    
    var menuUl = document.getElementById("mainmenu");
    var mHeight = document.getElementById("header").clientHeight;
    var x = menuUl.querySelectorAll('ul li');
    $scope.scrollToEele = function(id) {
        var secId = document.getElementById(id).offsetTop;
        window.scroll({top: secId - mHeight, left: 0, behavior: 'smooth'});
    }
    window.onscroll = function(){
        var scrollPosY = window.pageYOffset | document.body.scrollTop;
        var x = menuUl.querySelectorAll('li');
        for (var i = 0; i < x.length; i++) {
            var picId = x[i].querySelector('a').getAttribute('data');
            var offsetTop = document.getElementById(picId).offsetTop;
            var secHeight = document.getElementById(picId).clientHeight;
            if (offsetTop - scrollPosY - mHeight <= 3){
                x[i].className = "active";
            }
            else{x[i].className = "";}
            if (offsetTop - scrollPosY - mHeight + secHeight <= 0){
                x[i].className = "";
            }
        };
        

        // Animation view on page scroll

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