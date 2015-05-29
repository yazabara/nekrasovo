nekrasovoApp.directive('scrollToItem', function () {
    return {
        restrict: 'A',
        scope: {
            scrollTo: "@",
            scrollEffect: "@",
            scrollCoff: "@"
        },
        link: function ($scope, $elm) {
            $elm.on('click', function () {
                var coff = parseInt($scope.scrollCoff ? $scope.scrollCoff : 0);
                $('html,body').animate({
                    scrollTop: $($scope.scrollTo).offset().top + coff
                }, $scope.scrollEffect ? $scope.scrollEffect : "slow");
            });
        }
    }
});

nekrasovoApp.directive('navClassDirective', ['$window', function($window) {
    return {
        restrict: 'A',
        transclude: true,
        template: '<div ng-transclude></div>',
        scope: {
            navClass: '@',
            navRangeCoff: '@'
        },
        link: function($scope, elem) {

            var updateClass = function () {
                var coff = $scope.navRangeCoff ? $scope.navRangeCoff : 1;
                if ($window.pageYOffset > coff && !elem.hasClass($scope.navClass)) {
                    elem.addClass($scope.navClass);
                }
                if (elem.hasClass($scope.navClass) && $window.pageYOffset <= coff) {
                    elem.removeClass($scope.navClass);
                }
            };

            angular.element($window).bind('load', updateClass);
            angular.element($window).bind("scroll", updateClass);
        }
    };
}]);