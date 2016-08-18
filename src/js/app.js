var apps = angular.module("Apps", ["ui.router", "demoCtrl"]);
apps.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .when("", "/index")
        .otherwise("/index");
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                "": {
                    templateUrl: "tpls/home.html"
                },
                "title@index": {
                    templateUrl: "tpls/title.html"
                },
                "form@index": {
                    templateUrl: "tpls/form.html"
                },
                "table@index": {
                    templateUrl: "tpls/table.html"
                }
            }
        });
});
