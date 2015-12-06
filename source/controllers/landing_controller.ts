/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />


module OurDeal {
	'user strict';
	
	export class LandingCtrl {
		
		static $inject = ['SearchService'];
		constructor(private serchService: ISearchService) {
			this.serchService.check('https://script.google.com/macros/s/AKfycbzPg5maTWOvH_CxrvFu5OSqXLJHVKa3kiUfMDrUlbEY/dev')
				.then((result: ng.IHttpPromiseCallbackArg<DealInformationBrief[]>)=>{
					console.log(result);
				});
		}
		
		
	}	
	angular.module('OurDeal').controller('LandingCtrl', LandingCtrl);

}