/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />

module OurDeal {
	class OpenURLFactory {
		static $inject = ['$log', '$location', '$rootScope', '$ionicHistory'];
		
		constructor(private $log: ng.ILogService, private $location: ng.ILocationService, private $rootScope: ng.IRootScopeService, private $ionicHistory: ionic.navigation.IonicHistoryService){
			
		}
		
		
	}
	
	angular.module("OurDeal").factory("OpenURLFactory", OpenURLFactory);
}