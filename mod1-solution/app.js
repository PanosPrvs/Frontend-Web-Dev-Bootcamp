(function () {
    'use strict';

  angular.module('lunchCheck', [])
    .controller('lunchCheckerController', lunchCheckerController);
  lunchCheckerController.$inject = ['$scope', '$filter'];

  function lunchCheckerController($scope, $filter) {
    $scope.food='';
    $scope.totalFood = '';
    $scope.displayIfTooMuchFood = function () {
      $scope.totalFood = calculateIfTooMuchFood($scope.food);
    };
  }

  function calculateItems(string) {
    const calculateNumOfItems = string.split(',').filter(r => r !== '').length;
    console.log(calculateNumOfItems);
    return calculateNumOfItems;
  }

  function calculateIfTooMuchFood(string){
    const calculateMessage = calculateItems(string);

    if (calculateMessage > 0 && calculateMessage <= 3) {
      return 'Enjoy! 😉';
    } else if (calculateMessage > 3) {
      return 'Too much! 😤';
    }
    return 'Please enter data first!'
  }

})();
