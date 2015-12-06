/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../typings/ionic/ionic.d.ts" />
var OurDeal;
(function (OurDeal) {
    'use strict';
    runApp.$inject = ["$ionicPlatform"];
    function runApp($ionicPlatform) {
        $ionicPlatform.ready(function () {
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
    function configApp($stateProvider, $urlRouterProvider) {
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
        });
        $urlRouterProvider.otherwise('/app/');
    }
    angular.module('OurDeal', ['ionic'])
        .run(runApp)
        .config(configApp);
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
    var LandingCtrl = (function () {
        function LandingCtrl(serchService) {
            this.serchService = serchService;
            this.serchService.check('https://script.google.com/macros/s/AKfycbza1HDmXJPGvlKozybBVu4OVZkkG4zkMJNp_2skefl9EjyisBrN/exec')
                .then(function (result) {
                console.log(result);
            });
        }
        LandingCtrl.$inject = ['SearchService'];
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
            return this.$http.get(address);
        };
        SearchService.$inject = ['$http'];
        return SearchService;
    })();
    angular.module("OurDeal").service("SearchService", SearchService);
})(OurDeal || (OurDeal = {}));
//# sourceMappingURL=deal_search_service.js.map