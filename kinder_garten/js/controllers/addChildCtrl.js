'use strict';


angular.module('kindergartenApp');

kindergartenApp.controller('AddChildCtrl', AddChildCtrl);

AddChildCtrl.$inject = ['$scope'];

function AddChildCtrl($scope) {


}



// var kindergarten = {
//     kindergarten_1: [
//         {
//             children_1: []
//         }
//     ]
// };
//
// console.log(kindergarten.kindergarten_1)
//
// function addChildCtrl ($scope) {
//
//  var kindGarCode = $scope.kindGarCode;
//
//
//     $scope.addChild = function () {
//         var dd =  'children_'+kindergarten.kindergarten_1.length;
//
//         kindergarten.kindergarten_1.push({
//             dd: [{
//                 name: kindGarCode
//             }]
//
//
//         });
//         // var dd =  'children_'+kindergarten.kindergarten_1.length;
//
//         console.log(kindergarten.kindergarten_1.length);
//
//         console.log(kindergarten)
//         console.log('dwdwd')
//     };
//
//
// }
