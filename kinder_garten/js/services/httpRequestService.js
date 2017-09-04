'use strict';

angular.module('kindergartenApp');


kindergartenApp.service('httpRequest', httpRequest);


httpRequest.$inject = ['$http'];
function httpRequest ($http) {

    this.getChildData = function () {
        return $http.get('child.json ');
    };

}

