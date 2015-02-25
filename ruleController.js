/**
 * Created by Namita Malik on 23/2/15.
 */
var myRuleEngine = angular.module('myRuleEngine', []);
myRuleEngine.controller('FirstCtrl', ['$scope', function ($scope) {
  var response = JSON.parse('{"data":{"all":[{"name":"user_id","operator":"present","error":"You need to login before applying voucher code"},{"name":"user_id","operator":"equals","value":12345,"error":"Sorry, the code is not applicable for this user, login with the correct credentials to avail the benefits"},{"name":"promocode_usage_amount","operator":"lessThan","value":50,"error":"Your voucher code balance has exhausted"}]}}');
  if (response && response.data) {
    $scope.rules = response.data;
    $scope.ruleList = ['all', 'any'];
    $scope.addRules = function (rules, isSubRule) {
      if (isSubRule) {
        rules.push({all: [{name: 'A'}]});
      } else {
        rules.push({name: "A"});
      }
      localStorage.response = JSON.stringify($scope.rules);
    };
    $scope.removeRule = function (rules, index) {
      rules.splice(index, 1)
    };
  }
}]);
