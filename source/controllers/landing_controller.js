/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'user strict';
    var LandingCtrl = (function () {
        function LandingCtrl(serchService) {
            this.serchService = serchService;
            this.serchService.check('https://script.google.com/macros/s/AKfycbzPg5maTWOvH_CxrvFu5OSqXLJHVKa3kiUfMDrUlbEY/dev')
                .then(function (result) {
                console.log(result);
            });
        }
        LandingCtrl.$inject = ['SearchService'];
        return LandingCtrl;
    })();
    OurDeal.LandingCtrl = LandingCtrl;
    angular.module('OurDeal').controller('LandingCtrl', LandingCtrl);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=landing_controller.js.map