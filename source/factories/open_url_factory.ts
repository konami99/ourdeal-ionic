/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />

module OurDeal {
    'use strict';
    
	export class OpenURLService {
		static $inject = ['$log', '$location', '$rootScope', '$ionicHistory'];
		
		constructor(private $log: ng.ILogService, private $location: ng.ILocationService, private $rootScope: ng.IRootScopeService, private $ionicHistory: ionic.navigation.IonicHistoryService){
			console.log('OpenURLService initiated');
		}
		
        openURL(url:string){
            this.$log.debug('Handling open URL ' + url);
            
            this.$ionicHistory.nextViewOptions({
                historyRoot: true,
                disableBack: true,
                disableAnimate: true
            })
            
            if(url){
                window.location.hash = url.substr(16);
                this.$rootScope.$broadcast('handleopenurl', url);
                window.cordova.removeDocumentEventHandler('handleopenurl');
                window.cordova.addStickyDocumentEventHandler('handleopenurl');
                document.removeEventListener('handleopenurl', this.handleOpenUrl);
            }
        }
        
        handleOpenUrl=(e:any)=>{
            this.openURL(e.url);
            
        }
        
		onResume(){
            document.addEventListener('handleopenurl', this.handleOpenUrl, false);
        }
        
	}
	
	angular.module("OurDeal").service("OpenURLService", OpenURLService);
}