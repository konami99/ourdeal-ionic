/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../typings/ionic/ionic.d.ts" />

interface Window {
    cordova: any;
    StatusBar: any;
	Connection: any;
}


module OurDeal {
	'use strict';
	
	runApp.$inject = ["$ionicPlatform", "$ionicPopup", "$cordovaNetwork"];
	function runApp($ionicPlatform:ionic.platform.IonicPlatformService, $ionicPopup:ionic.popup.IonicPopupService, $cordovaNetwork:any) {
		$ionicPlatform.ready(() => {
			if (window.cordova && window.cordova.plugins.Keyboard) {
				window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				window.cordova.plugins.Keyboard.disableScroll(true);
			}
			if (window.StatusBar) {
				window.StatusBar.styleDefault();
			}
			
			if(window.Connection) {
                if($cordovaNetwork.getNetwork() == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        template: "The internet is disconnected on your device."
                    })
                    .then(function(result:any) {
                        if(!result) {
                            ionic.Platform.exitApp();
                        }
                    });
                }
            }
		});
	}
	
	configApp.$inject = ["$stateProvider", "$urlRouterProvider", "$ionicConfigProvider"];
	function configApp($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider, $ionicConfigProvider:ionic.utility.IonicConfigProvider) {
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
		.state('app.deal', {
			url: '/deal/:dealid',
			views: {
				'menuContent': {
					templateUrl: 'templates/deal.html',
					controller: 'DealCtrl',
					controllerAs: 'dealc'
				}
			}
		})
		.state('app.payment', {
			url: '/payment/:dealid',
			views: {
				'menuContent': {
					templateUrl: 'templates/payment.html',
					controller: 'PaymentCtrl',
					controllerAs: 'paymentc'
				}
			}
		});
		
		$urlRouterProvider.otherwise('/app/');
		
		$ionicConfigProvider.navBar.alignTitle('center');
	}
	
	angular.module('OurDeal', ['ionic', 'braintree-angular', 'ngCordova'])
		.run(runApp)
		.config(configApp)
		.constant('clientTokenPath', 'https://script.googleusercontent.com/macros/echo?user_content_key=BKVxIkgcNlhRBKNozswCjGuuQI70emQEUjrglyJ_ezvSeL9rSp0UDkI6kcLjDQw8eXZPhTK-tVat7yf8Xlm6njPxlez2wpc7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNGitsND9kT-eAhhbJJvQS8Yju48CoLx0uDM8Q8fA6aMP36fsJbJJPpvDZK8eblHPjOmbnRGq-tk&lib=M1H49ebuAVAcbEEfD2DqHRoKMNz51Yx3E');	
		
	//angular.module('OurDeal', [])
  			
}
