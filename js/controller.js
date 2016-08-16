var demo = angular.module("demoCtrl", []);

demo.controller("myCtrl", function ($scope, $http) {

    $scope.person = {};

    $http({
        method: "GET",
        url: "person.json"
    }).then(function (response) {
        $scope.master = response.data;
        console.info(response.data);
    });
    $scope.persons = [];

    $scope.reset = function () {
        $scope.person = angular.copy($scope.master);
        $scope.persons = [];
    };

    $scope.save = function () {
        $scope.persons.push(angular.copy($scope.person));
    };

    $scope.remove = function () {
        $scope.persons.pop();
    };
});

demo.factory("myService", function () {
});

demo.filter("isRemember", function () {
    return function (input) {
        return input ? '是' : '否';
    }
});