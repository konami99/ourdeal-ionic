/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'use strict';
    var OpenURLService = (function () {
        function OpenURLService($log, $location, $rootScope, $ionicHistory) {
            this.$log = $log;
            this.$location = $location;
            this.$rootScope = $rootScope;
            this.$ionicHistory = $ionicHistory;
            console.log('OpenURLService initiated');
        }
        OpenURLService.prototype.openURL = function (url) {
            this.$log.debug('Handling open URL ' + url);
            this.$ionicHistory.nextViewOptions({
                historyRoot: true,
                disableBack: true,
                disableAnimate: true
            });
            if (url) {
                window.location.hash = url.substr(5);
                this.$rootScope.$broadcast('handleopenurl', url);
                window.cordova.removeDocumentEventHandler('handleopenurl');
                window.cordova.addStickyDocumentEventHandler('handleopenurl');
                document.removeEventListener('handleopenurl', this.handleOpenUrl);
            }
        };
        OpenURLService.prototype.handleOpenUrl = function (e) {
            this.openURL(e.url);
        };
        OpenURLService.prototype.onResume = function () {
            document.addEventListener('handleopenurl', this.handleOpenUrl, false);
        };
        OpenURLService.$inject = ['$log', '$location', '$rootScope', '$ionicHistory'];
        return OpenURLService;
    })();
    OurDeal.OpenURLService = OpenURLService;
    angular.module("OurDeal").service("OpenURLService", OpenURLService);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=open_url_factory.js.map