function MainController($scope) {
  $scope.contact = {
    name: 'francis',
    email: 'francis@francis.com',
    phone: '555-123-4567'
  };
}

angular
  .module('app')
  .controller('MainController', MainController);