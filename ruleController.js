/**
 * Created by namita on 23/2/15.
 */
var myRuleEngine = angular.module('myRuleEngine', []);
myRuleEngine.controller('FirstCtrl', ['$scope', function ($scope) {
    $scope.ruleObject = {
        ruleList: ['All', 'Any'],
        rules: []
    };
    $scope.addRules = function () {
        $scope.ruleObject.rules.push({});
    };
    $scope.removeRule = function (index) {
        $scope.ruleObject.rules.splice(index, 1)
    };
}]);
myRuleEngine.directive('renderRules', function () {
    return {
        restrict: "E",
        templateUrl: "ruleTemplate.html"
    };
});
myRuleEngine.directive('renderSubCondition', function () {
    return {
        restrict: "E",
        templateUrl: "subConditionTemplate.html"
    };
});