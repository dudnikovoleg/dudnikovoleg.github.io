'use strict';

angular.module('kindergartenApp');

kindergartenApp.controller('ChildrenTableCtrl', ChildrenTableCtrl);

ChildrenTableCtrl.$inject = ['$scope', 'httpRequest'];


function ChildrenTableCtrl ($scope, httpRequest) {
<<<<<<< HEAD
=======
    httpRequest.getChildData().then(function (response) {
        $scope.children = response.data.children
>>>>>>> 339ba61fe3b4c30d402f44ce692be80994a5a066

    });

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
<<<<<<< HEAD
            infinite: false,
            nextArrow: angular.element($(".nextArrow")),
            prevArrow: angular.element($(".prevArrow"))
=======
            infinite: false
>>>>>>> 339ba61fe3b4c30d402f44ce692be80994a5a066

            // lazyLoad: 'ondemand'
        });
        $scope.setStile = function (setStile) {
            return 'opacity: 1';
        };
    });
}


