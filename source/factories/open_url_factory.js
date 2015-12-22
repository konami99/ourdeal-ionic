/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    var OpenURLFactory = (function () {
        function OpenURLFactory($http) {
            this.$http = $http;
        }
        OpenURLFactory.prototype.check = function (address) {
            return this.$http.get(address, { cache: true });
        };
        OpenURLFactory.$inject = ['$http'];
        return OpenURLFactory;
    })();
    angular.module("OurDeal").service("SearchService", SearchService);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=open_url_factory.js.map