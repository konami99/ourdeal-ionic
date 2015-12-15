/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />

module OurDeal {
	'user strict';
	
	export class PaymentCtrl {
		
		static $inject = ["$braintree"];
		constructor($braintree:any) {
			$braintree.getClientToken().success(function(token:any) {
				console.log(token);
				var client = new $braintree.api.Client({
					clientToken: token
				});
			});
		}
	}	
	angular.module('OurDeal').controller('PaymentCtrl', PaymentCtrl);

}