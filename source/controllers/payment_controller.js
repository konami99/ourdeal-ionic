/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'user strict';
    var PaymentCtrl = (function () {
        function PaymentCtrl($braintree) {
            $braintree.getClientToken().success(function (token) {
                console.log(token);
                var client = new $braintree.api.Client({
                    clientToken: token
                });
            });
        }
        PaymentCtrl.prototype.payButtonClicked = function () {
            console.log('payButtonClicked');
        };
        PaymentCtrl.$inject = ["$braintree"];
        return PaymentCtrl;
    })();
    OurDeal.PaymentCtrl = PaymentCtrl;
    angular.module('OurDeal').controller('PaymentCtrl', PaymentCtrl);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=payment_controller.js.map