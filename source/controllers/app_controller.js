/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'use strict';
    var AppCtrl = (function () {
        function AppCtrl(ionicModal) {
            var _this = this;
            this.ionicModal = ionicModal;
            this.loginData = {};
            ionicModal.fromTemplateUrl('templates/login.html', function () {
                scope: _this;
            }).then(function (modal) {
                _this.modalx = modal;
                console.log(_this.modalx);
            });
        }
        AppCtrl.prototype.closeLogin = function () {
            this.modalx.hide();
        };
        AppCtrl.prototype.login = function () {
            this.modalx.show();
        };
        AppCtrl.prototype.doLogin = function () {
        };
        AppCtrl.$inject = ["$ionicModal"];
        return AppCtrl;
    })();
    OurDeal.AppCtrl = AppCtrl;
    angular.module('OurDeal').controller('AppCtrl', AppCtrl);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=app_controller.js.map