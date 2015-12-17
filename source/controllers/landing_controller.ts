/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />


module OurDeal {
	'user strict';
	
	export class LandingCtrl {
		private deals : DealInformationBrief[];
		
		static $inject = ['SearchService', '$ionicLoading', '$rootScope', '$cordovaNetwork', '$ionicPlatform'];
		constructor(private serchService: ISearchService, $ionicLoading:ionic.loading.IonicLoadingService, $rootScope:any, $cordovaNetwork:any, $ionicPlatform:any) {
			
			
			
			$ionicLoading.show({
				template: 'Loading...'
			});
			this.serchService.check('https://script.google.com/macros/s/AKfycbza1HDmXJPGvlKozybBVu4OVZkkG4zkMJNp_2skefl9EjyisBrN/exec')
				.then((result: ng.IHttpPromiseCallbackArg<DealInformationBrief[]>)=>{
					this.deals= result.data;
				})
				.finally(function(){
					$ionicLoading.hide();
				});
				
			$ionicPlatform.ready(function() {
				
					var type= $cordovaNetwork.isOnline();
					console.log(type);
				
			});
		}
		
		
	}	
	angular.module('OurDeal').controller('LandingCtrl', LandingCtrl);

}