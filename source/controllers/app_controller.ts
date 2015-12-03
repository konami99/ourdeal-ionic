/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />

module OurDeal {
	'use strict';
	
	
	
	export class AppCtrl {
		private loginData = {};
		private modalx : ionic.modal.IonicModalController
		
		static $inject = ["$ionicModal", "$scope"];
		
		//http://stackoverflow.com/questions/25854422/using-this-as-scope-when-creating-ionicmodal?rq=1
		constructor(private ionicModal: ionic.modal.IonicModalService, $scope: ng.IScope){
			ionicModal.fromTemplateUrl('templates/login.html',{
				scope: $scope
			}).then((modal: ionic.modal.IonicModalController)=>{
				this.modalx = modal;
			});
    	}
		
		closeLogin(){
			console.log('closelogin'); 
			this.modalx.hide();
		}
		
		login(){
			this.modalx.show();	
		}
		
		doLogin(){
			console.log('dologin');
		}
	}
	
	angular.module('OurDeal').controller('AppCtrl', AppCtrl);
}