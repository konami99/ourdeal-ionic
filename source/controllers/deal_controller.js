/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'user strict';
    var DealCtrl = (function () {
        function DealCtrl(routeParams, $state, dealId) {
            this.$state = $state;
            this.dealId = dealId;
            this.dealId = routeParams.dealid;
        }
        DealCtrl.prototype.goToPayment = function () {
            this.$state.go('app.payment', { dealid: this.dealId });
        };
        //private deals : DealInformationBrief[];
        DealCtrl.$inject = ['$stateParams', '$state'];
        return DealCtrl;
    })();
    OurDeal.DealCtrl = DealCtrl;
    angular.module('OurDeal').controller('DealCtrl', DealCtrl);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=deal_controller.js.map