'use strict';

angular.module('kindergartenApp');

kindergartenApp.controller('ChildrenTableCtrl', ChildrenTableCtrl);

ChildrenTableCtrl.$inject = ['$scope', 'httpRequest'];


function ChildrenTableCtrl ($scope, httpRequest) {
    httpRequest.getChildData().then(function (response) {
        $scope.children = response.data.children
    });



    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
        angular.element($("#ss")).slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            rows: 2,
            infinite: false
            // lazyLoad: 'ondemand'

        });
        $scope.setStile = function (setStile) {
            return 'opacity: 1';
        };

    });

}


