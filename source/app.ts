/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../typings/ionic/ionic.d.ts" />

interface Window {
    cordova: any;
    StatusBar: any;
}


module OurDeal {
	'use strict';
	
	runApp.$inject = ["$ionicPlatform"];
	function runApp($ionicPlatform:ionic.platform.IonicPlatformService) {
		$ionicPlatform.ready(() => {
			if (window.cordova && window.cordova.plugins.Keyboard) {
				window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				window.cordova.plugins.Keyboard.disableScroll(true);
			}
			if (window.StatusBar) {
				window.StatusBar.styleDefault();
			}
		});
	}
	
	configApp.$inject = ["$stateProvider", "$urlRouterProvider"];
	function configApp($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
		

		$stateProvider
		 .state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'templates/menu.html',
			controller: 'AppCtrl',
			controllerAs: 'appc'
		})
		
		.state('app.search', {
			url: '/search',
			views: {
				'menuContent': {
					templateUrl: 'templates/search.html'
				}
			}
		})
		
		.state('app.browse', {
			url: '/browse',
			views: {
				'menuContent': {
					templateUrl: 'templates/browse.html'
				}
			}
			})
		.state('app.playlists', {
		url: '/playlists',
		views: {
			'menuContent': {
				templateUrl: 'templates/playlists.html',
				controller: 'PlaylistsCtrl',
				controllerAs: 'playlistsc'
			}
		}
		})
		
		.state('app.single', {
			url: '/playlists/:playlistId',
			views: {
				'menuContent': {
					templateUrl: 'templates/playlist.html',
					controller: 'PlaylistCtrl',
					controllerAs: 'playlistc'
				}
			}
		})
		
		.state('app.landing', {
			url: '/',
			views: {
				'menuContent': {
					templateUrl: 'templates/landing.html',
					controller: 'LandingCtrl',
					controllerAs: 'landingc'
				}
			}
		})
		
		$urlRouterProvider.otherwise('/app/');
	}
	
	angular.module('OurDeal', ['ionic'])
		.run(runApp)
		.config(configApp);		
}
