/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />

module OurDeal {
	'use strict';
	
	
	
	export class AppCtrl {
		private loginData = {};
		private modalx : ionic.modal.IonicModalController
		
		static $inject = ["$ionicModal"];
		constructor(private ionicModal: ionic.modal.IonicModalService){
			ionicModal.fromTemplateUrl('templates/login.html', ()=>{
				scope: this
			}).then((modal: ionic.modal.IonicModalController)=>{
				
				this.modalx = modal;
				//console.log(this.modalx);
			});
    	}
		
		closeLogin(){
			console.log(this.modalx);
			this.modalx.hide();
		}
		
		login(){
			this.modalx.show();	
		}
		
		doLogin(){
			
		}
	}
	
	angular.module('OurDeal').controller('AppCtrl', AppCtrl);
}