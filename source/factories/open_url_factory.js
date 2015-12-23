/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'use strict';
    var OpenURLService = (function () {
        function OpenURLService($log, $location, $rootScope, $ionicHistory) {
            var _this = this;
            this.$log = $log;
            this.$location = $location;
            this.$rootScope = $rootScope;
            this.$ionicHistory = $ionicHistory;
            this.openURL = function (url) {
                _this.$log.debug('Handling open URL ' + url);
                _this.$ionicHistory.nextViewOptions({
                    historyRoot: true,
                    disableBack: true,
                    disableAnimate: true
                });
                if (url) {
                    window.location.hash = url.substr(15);
                    console.log('window.location.hash= ' + window.location.hash);
                    _this.$rootScope.$broadcast('handleopenurl', url);
                    window.cordova.removeDocumentEventHandler('handleopenurl');
                    window.cordova.addStickyDocumentEventHandler('handleopenurl');
                    document.removeEventListener('handleopenurl', _this.handleOpenUrl);
                }
            };
            this.handleOpenUrl = function (e) {
                _this.openURL(e.url);
            };
            this.onResume = function () {
                console.log('resume');
                document.addEventListener('handleopenurl', _this.handleOpenUrl, false);
            };
            console.log('OpenURLService initiated');
        }
        OpenURLService.$inject = ['$log', '$location', '$rootScope', '$ionicHistory'];
        return OpenURLService;
    })();
    OurDeal.OpenURLService = OpenURLService;
    angular.module("OurDeal").service("OpenURLService", OpenURLService);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=open_url_factory.js.map