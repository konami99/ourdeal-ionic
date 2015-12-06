/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />

module OurDeal {
	export interface ISearchService {
		check() : ng.IPromise<ng.IHttpPromiseCallbackArg<DealInformationBrief[]>>;
	}
	
	//angular.module("OurDeal").service("SearchService", SearchService);
}