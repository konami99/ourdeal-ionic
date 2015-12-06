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