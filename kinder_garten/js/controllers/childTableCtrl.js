'use strict';

angular.module('kindergartenApp');

kindergartenApp.controller('ChildrenTableCtrl', ChildrenTableCtrl);

ChildrenTableCtrl.$inject = ['$scope', 'httpRequest'];


function ChildrenTableCtrl ($scope, httpRequest) {


    httpRequest.getChildData().then(
        function (response) {
            $scope.children = response.data.children;
            $scope.allPicture = response.data.children.filter(function (elem) {
                return (elem.picture);
            });
        },
        function (error) {
            console.log(error)
        });

    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
        angular.element($("#ss")).slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            rows: 2,
            infinite: false,
            nextArrow: angular.element($(".nextArrow")),
            prevArrow: angular.element($(".prevArrow"))

            // lazyLoad: 'ondemand'
        });
        $scope.setStile = function (setStile) {
            return 'opacity: 1';
        };
    });
}


