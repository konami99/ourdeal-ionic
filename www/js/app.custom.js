/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../typings/ionic/ionic.d.ts" />
function handleOpenURL(url) {
    console.log("handleOpenURL");
    window.cordova.fireDocumentEvent('handleopenurl', { url: url });
}
;
if (window.cordova) {
    // Create a sticky event for handling the app being opened via a custom URL
    window.cordova.addStickyDocumentEventHandler('handleopenurl');
    console.log("window.cordova");
}
var OurDeal;
(function (OurDeal) {
    'use strict';
    runApp.$inject = ["$ionicPlatform", "$ionicPopup", "$cordovaNetwork", "OpenURLService"];
    function runApp($ionicPlatform, $ionicPopup, $cordovaNetwork, o) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                window.cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                window.StatusBar.styleDefault();
            }
            if (window.Connection) {
                if ($cordovaNetwork.getNetwork() == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        template: "The internet is disconnected on your device."
                    })
                        .then(function (result) {
                        if (!result) {
                            ionic.Platform.exitApp();
                        }
                    });
                }
            }
            document.addEventListener('handleopenurl', o.handleOpenUrl, false);
            document.addEventListener('resume', o.onResume, false);
            // Register for any Urban Airship events
            document.addEventListener("urbanairship.registration", function (event) {
                if (event.error) {
                    console.log('There was an error registering for push notifications');
                }
                else {
                    console.log("Registered with ID: " + event.channelID);
                }
            });
            document.addEventListener("urbanairship.push", function (event) {
                console.log("Incoming push: " + event.message);
                console.log(event.extras.route);
            });
            // Set tags on a device, that you can push to
            UAirship.setTags(["loves_cats", "shops_for_games"], function () {
                UAirship.getTags(function (tags) {
                    tags.forEach(function (tag) {
                        console.log("Tag: " + tag);
                    });
                });
            });
            // Set an alias, this lets you tie a device to a user in your system
            UAirship.setAlias("awesomeuser22", function () {
                UAirship.getAlias(function (alias) {
                    console.log("The user formerly known as " + alias);
                });
            });
            // Enable user notifications (will prompt the user to accept push notifications)
            UAirship.setUserNotificationsEnabled(true, function (enabled) {
                console.log("User notifications are enabled! Fire away!");
            });
        });
    }
    configApp.$inject = ["$stateProvider", "$urlRouterProvider", "$ionicConfigProvider"];
    function configApp($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
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
        //document.addEventListener('handleopenurl', o.handleOpenUrl, false);
        //document.addEventListener('resume', o.onResume, false);
    }
    angular.module('OurDeal', ['ionic', 'braintree-angular', 'ngCordova'])
        .run(runApp)
        .config(configApp)
        .constant('clientTokenPath', 'https://script.googleusercontent.com/macros/echo?user_content_key=BKVxIkgcNlhRBKNozswCjGuuQI70emQEUjrglyJ_ezvSeL9rSp0UDkI6kcLjDQw8eXZPhTK-tVat7yf8Xlm6njPxlez2wpc7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNGitsND9kT-eAhhbJJvQS8Yju48CoLx0uDM8Q8fA6aMP36fsJbJJPpvDZK8eblHPjOmbnRGq-tk&lib=M1H49ebuAVAcbEEfD2DqHRoKMNz51Yx3E');
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=app.js.map
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'use strict';
    var AppCtrl = (function () {
        //http://stackoverflow.com/questions/25854422/using-this-as-scope-when-creating-ionicmodal?rq=1
        function AppCtrl(ionicModal, $scope) {
            var _this = this;
            this.ionicModal = ionicModal;
            this.loginData = {};
            ionicModal.fromTemplateUrl('templates/login.html', {
                scope: $scope
            }).then(function (modal) {
                _this.modalx = modal;
            });
        }
        AppCtrl.prototype.closeLogin = function () {
            console.log('closelogin');
            this.modalx.hide();
        };
        AppCtrl.prototype.login = function () {
            this.modalx.show();
        };
        AppCtrl.prototype.doLogin = function () {
            console.log('dologin');
        };
        AppCtrl.$inject = ["$ionicModal", "$scope"];
        return AppCtrl;
    })();
    OurDeal.AppCtrl = AppCtrl;
    angular.module('OurDeal').controller('AppCtrl', AppCtrl);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=app_controller.js.map
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'user strict';
    var DealCtrl = (function () {
        function DealCtrl(routeParams, $state, dealId) {
            this.$state = $state;
            this.dealId = dealId;
            this.dealId = routeParams.dealid;
        }
        DealCtrl.prototype.goToPayment = function () {
            this.$state.go('app.payment', { dealid: this.dealId });
        };
        //private deals : DealInformationBrief[];
        DealCtrl.$inject = ['$stateParams', '$state'];
        return DealCtrl;
    })();
    OurDeal.DealCtrl = DealCtrl;
    angular.module('OurDeal').controller('DealCtrl', DealCtrl);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=deal_controller.js.map
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'user strict';
    var LandingCtrl = (function () {
        function LandingCtrl(serchService, $ionicLoading, $ionicPlatform, $cordovaNetwork, $rootScope) {
            var _this = this;
            this.serchService = serchService;
            $ionicLoading.show({
                template: 'Loading...'
            });
            this.serchService.check('https://script.google.com/macros/s/AKfycbza1HDmXJPGvlKozybBVu4OVZkkG4zkMJNp_2skefl9EjyisBrN/exec')
                .then(function (result) {
                _this.deals = result.data;
            })
                .finally(function () {
                $ionicLoading.hide();
            });
        }
        LandingCtrl.$inject = ['SearchService', '$ionicLoading', '$ionicPlatform', '$cordovaNetwork', '$rootScope'];
        return LandingCtrl;
    })();
    OurDeal.LandingCtrl = LandingCtrl;
    angular.module('OurDeal').controller('LandingCtrl', LandingCtrl);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=landing_controller.js.map
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'user strict';
    var PaymentCtrl = (function () {
        function PaymentCtrl($braintree, braintreeClient) {
            var _this = this;
            this.braintreeClient = braintreeClient;
            this.creditCard = {
                number: '',
                expirationDate: ''
            };
            $braintree.getClientToken().success(function (token) {
                console.log(token);
                _this.braintreeClient = new $braintree.api.Client({
                    clientToken: token
                });
            });
        }
        PaymentCtrl.prototype.payButtonClicked = function () {
            console.log('payButtonClicked');
            this.braintreeClient.tokenizeCard({
                number: this.creditCard.number,
                expirationDate: this.creditCard.expirationDate
            }, function (err, nonce) {
                console.log(nonce);
            });
        };
        PaymentCtrl.$inject = ["$braintree"];
        return PaymentCtrl;
    })();
    OurDeal.PaymentCtrl = PaymentCtrl;
    angular.module('OurDeal').controller('PaymentCtrl', PaymentCtrl);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=payment_controller.js.map
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'use strict';
    var PlaylistsCtrl = (function () {
        function PlaylistsCtrl() {
            this.playlists = [
                { title: 'Reggae', id: 1 },
                { title: 'Chill', id: 2 },
                { title: 'Dubstep', id: 3 },
                { title: 'Indie', id: 4 },
                { title: 'Rap', id: 5 },
                { title: 'Cowbell', id: 6 }
            ];
        }
        return PlaylistsCtrl;
    })();
    OurDeal.PlaylistsCtrl = PlaylistsCtrl;
    angular.module('OurDeal').controller('PlaylistsCtrl', PlaylistsCtrl);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=playlists_controller.js.map
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'use strict';
    var PlaylistCtrl = (function () {
        function PlaylistCtrl() {
        }
        return PlaylistCtrl;
    })();
    OurDeal.PlaylistCtrl = PlaylistCtrl;
    angular.module('OurDeal').controller('PlaylistCtrl', PlaylistCtrl);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=playlist_controller.js.map
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'use strict';
    var OpenURLService = (function () {
        function OpenURLService($log, $location, $rootScope, $ionicHistory) {
            this.$log = $log;
            this.$location = $location;
            this.$rootScope = $rootScope;
            this.$ionicHistory = $ionicHistory;
            console.log('OpenURLService initiated');
        }
        OpenURLService.prototype.openURL = function (url) {
            this.$log.debug('Handling open URL ' + url);
            this.$ionicHistory.nextViewOptions({
                historyRoot: true,
                disableBack: true,
                disableAnimate: true
            });
            if (url) {
                window.location.hash = url.substr(5);
                this.$rootScope.$broadcast('handleopenurl', url);
                window.cordova.removeDocumentEventHandler('handleopenurl');
                window.cordova.addStickyDocumentEventHandler('handleopenurl');
                document.removeEventListener('handleopenurl', this.handleOpenUrl);
            }
        };
        OpenURLService.prototype.handleOpenUrl = function (e) {
            this.openURL(e.url);
        };
        OpenURLService.prototype.onResume = function () {
            document.addEventListener('handleopenurl', this.handleOpenUrl, false);
        };
        OpenURLService.$inject = ['$log', '$location', '$rootScope', '$ionicHistory'];
        return OpenURLService;
    })();
    OurDeal.OpenURLService = OpenURLService;
    angular.module("OurDeal").service("OpenURLService", OpenURLService);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=open_url_factory.js.map
var OurDeal;
(function (OurDeal) {
    var DealInformationBrief = (function () {
        function DealInformationBrief() {
        }
        return DealInformationBrief;
    })();
    OurDeal.DealInformationBrief = DealInformationBrief;
    var DealInformationDetailed = (function () {
        function DealInformationDetailed() {
        }
        return DealInformationDetailed;
    })();
    OurDeal.DealInformationDetailed = DealInformationDetailed;
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=deal_information_brief.js.map
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    var SearchService = (function () {
        function SearchService($http) {
            this.$http = $http;
        }
        SearchService.prototype.check = function (address) {
            return this.$http.get(address, { cache: true });
        };
        SearchService.$inject = ['$http'];
        return SearchService;
    })();
    angular.module("OurDeal").service("SearchService", SearchService);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=deal_search_service.js.map