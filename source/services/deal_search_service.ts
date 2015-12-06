/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />

module OurDeal {
	export interface ISearchService {
		check(address:string) : ng.IPromise<ng.IHttpPromiseCallbackArg<DealInformationBrief[]>>;
	}
	
	class SearchService implements ISearchService {
		static $inject = ['$http'];
		
		constructor(private $http : ng.IHttpService){
			
		}
		
		check(address:string) : ng.IPromise<ng.IHttpPromiseCallbackArg<DealInformationBrief[]>>{
			return this.$http.get(address);
		}
	}
	
	angular.module("OurDeal").service("SearchService", SearchService);
}