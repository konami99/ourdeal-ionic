/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />

module OurDeal {
	'user strict';
	
	export class PaymentCtrl {
		
		private creditCard = {
			number: '',
			expirationDate: ''
		};
		
		static $inject = ["$braintree"];
		constructor($braintree:any, private braintreeClient: any) {
			$braintree.getClientToken().success((token:any)=>{
				this.braintreeClient = new $braintree.api.Client({
					clientToken: token
				});
			});
		}
		
		payButtonClicked() {
			console.log('payButtonClicked');
			this.braintreeClient.tokenizeCard({
				number: this.creditCard.number,
				expirationDate: this.creditCard.expirationDate
			}, function(err:any, nonce:any){
				console.log(nonce)
			});
		}
	}	
	angular.module('OurDeal').controller('PaymentCtrl', PaymentCtrl);

}