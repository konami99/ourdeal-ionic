/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'user strict';
    var LandingCtrl = (function () {
        function LandingCtrl(serchService, $ionicLoading, $ionicPlatform, $cordovaNetwork, $rootScope) {
            var _this = this;
            this.serchService = serchService;
            $ionicLoading.show({
                template: 'Loading...'
            });
            this.serchService.check('https://script.google.com/macros/s/AKfycbza1HDmXJPGvlKozybBVu4OVZkkG4zkMJNp_2skefl9EjyisBrN/exec')
                .then(function (result) {
                _this.deals = result.data;
            })
                .finally(function () {
                $ionicLoading.hide();
            });
        }
        LandingCtrl.$inject = ['SearchService', '$ionicLoading', '$ionicPlatform', '$cordovaNetwork', '$rootScope'];
        return LandingCtrl;
    })();
    OurDeal.LandingCtrl = LandingCtrl;
    angular.module('OurDeal').controller('LandingCtrl', LandingCtrl);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=landing_controller.js.map