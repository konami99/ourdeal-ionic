/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../typings/ionic/ionic.d.ts" />

module OD {
	'use strict';
	
	runApp.$inject = ["$ionicPlatform", "$window"];
	function runApp($ionicPlatform:ionic.platform.IonicPlatformService, $window) {
		$ionicPlatform.ready(() => {
			if ($window.cordova && $window.cordova.plugins.Keyboard) {
				$window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				$window.cordova.plugins.Keyboard.disableScroll(true);
			}
			if ($window.StatusBar) {
				$window.StatusBar.styleDefault();
			}
		});
	}
	
	configApp.$inject = ["$stateProvider", "$urlRouterProvider"];
	function configApp($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
		$urlRouterProvider.otherwise('/layout');

		$stateProvider.state('layout', {
				url: "/layout",
				templateUrl: "app/layout/layout.html"
			})

		.state('about', {
			url: "/about",
			templateUrl: "app/about/about.html"
		});
	}
	
	angular.module('OurDeal')
		.run(runApp)
		.config(configApp);
		
}
