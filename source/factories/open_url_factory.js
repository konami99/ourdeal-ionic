/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    var OpenURLFactory = (function () {
        function OpenURLFactory($log, $location, $rootScope, $ionicHistory) {
            this.$log = $log;
            this.$location = $location;
            this.$rootScope = $rootScope;
            this.$ionicHistory = $ionicHistory;
        }
        OpenURLFactory.$inject = ['$log', '$location', '$rootScope', '$ionicHistory'];
        return OpenURLFactory;
    })();
    angular.module("OurDeal").factory("OpenURLFactory", OpenURLFactory);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=open_url_factory.js.map