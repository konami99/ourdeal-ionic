/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    var SearchService = (function () {
        function SearchService($http) {
            this.$http = $http;
        }
        SearchService.prototype.check = function (address) {
            return this.$http.get(address);
        };
        SearchService.$inject = ['$http'];
        return SearchService;
    })();
    angular.module("OurDeal").service("SearchService", SearchService);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=deal_search_service.js.map