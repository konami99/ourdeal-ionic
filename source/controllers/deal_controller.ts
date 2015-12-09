/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />


module OurDeal {
	'user strict';
	interface IStateParams extends ng.ui.IStateParamsService {
		dealid : number;
	}
	
	export class DealCtrl {
		//private deals : DealInformationBrief[];
		
		static $inject = ['$stateParams'];
		constructor(private routeParams: IStateParams, private dealId:number) {
			this.dealId = routeParams.dealid;
		}
		
		
	}	
	angular.module('OurDeal').controller('DealCtrl', DealCtrl);

}