angular.module('bzrdashApp').factory('dateFilterHttpInterceptor', ["$q", "$rootScope", "SERVERURL", function ($q, $rootScope, SERVERURL) {
    console.log('$rootScope.dateFilter=', $rootScope.dateFilter); // eslint-disable-line no-console
    return {
        'request': function (config) {
            config.params = config.params || {};
            if (config.allowDateFilter && $rootScope.dateFilter.lastNDays) {
                config.params["lastNDays"] = $rootScope.dateFilter.lastNDays;
            } else if (config.allowDateFilter && $rootScope.dateFilter.startDay && $rootScope.dateFilter.endDay) {
                config.params["startDay"] = $rootScope.dateFilter.startDay;
                config.params["endDay"] = $rootScope.dateFilter.endDay;
            }
            return config;
        }
    };
}]);
angular.module('bzrdashApp').factory('dateFilterRangeHttpInterceptor', ["$q", "$rootScope", "SERVERURL", function ($q, $rootScope, SERVERURL) {
    console.log('$rootScope.dateFilter=', $rootScope.dateFilter); // eslint-disable-line no-console
    return {
        'request': function (config) {
            config.params = config.params || {};
            if (config.allowDateFilter && $rootScope.dateFilter.startDate && $rootScope.dateFilter.endDate) {
                config.params["startDate"] = $rootScope.dateFilter.startDate;
                config.params["endDate"] = $rootScope.dateFilter.endDate;
            }
            return config;
        },
    };
}]);