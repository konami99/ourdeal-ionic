/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'use strict';
    var AppCtrl = (function () {
        //http://stackoverflow.com/questions/25854422/using-this-as-scope-when-creating-ionicmodal?rq=1
        function AppCtrl(ionicModal, $scope) {
            var _this = this;
            this.ionicModal = ionicModal;
            this.loginData = {};
            ionicModal.fromTemplateUrl('templates/login.html', {
                scope: $scope
            }).then(function (modal) {
                _this.modalx = modal;
            });
        }
        AppCtrl.prototype.closeLogin = function () {
            console.log('closelogin');
            this.modalx.hide();
        };
        AppCtrl.prototype.login = function () {
            this.modalx.show();
        };
        AppCtrl.prototype.doLogin = function () {
            console.log('dologin');
        };
        AppCtrl.$inject = ["$ionicModal", "$scope"];
        return AppCtrl;
    })();
    OurDeal.AppCtrl = AppCtrl;
    angular.module('OurDeal').controller('AppCtrl', AppCtrl);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=app_controller.js.map