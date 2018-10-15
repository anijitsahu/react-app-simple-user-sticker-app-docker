var app = angular.module('controllerModule', ['serviceModule'])

app.controller('appCtrl', ['$scope', '$http', 'addData', function ($scope, $http, addData) {
  $scope.users = []
  $scope.id = ($scope.users.length > 0) ? $scope.users[$scope.users.length - 1]['id'] : 0

  // hold the info for new user 
  $scope.newUser = {}

  // initially we started with 15 user
  $scope.totalUser = 16

  $scope.showUser = true
  $scope.test = function (id) {
    console.log('inside test...')
    console.log('users have ', $scope.users.length, ' users')
    $scope.id = ($scope.users.length > 0) ? $scope.users[$scope.users.length - 1]['id'] + 1 : 0
    console.log('id value is now: ', $scope.id)
    $scope.show($scope.id)
  }

  $scope.show = function (id) {
    $scope.showUser = true
    $scope.showAdd = false
    
    if (id) {
      // make it cyclic
      if (id >= $scope.totalUser) {
        id = 0
      }
    } else {
      // for the first time
      id = 0
    }
    console.log('id value within the show ', id)
    console.log('total users are: ', $scope.totalUser)

    // call the backend to get the data
    addData.getUser(id).then(function (response) {
      $scope.users = response.data
    })
  }
  $scope.show($scope.id)

  // when add link is clicked
  // $scope.add = function () {
  //   $scope.showAdd = true
  //   $scope.showUser = false
  // }

  // when Save User Button is clicked
  $scope.saveUser = function () {
    console.log($scope.newUser)
    $scope.showAdd = false
    $scope.showUser = true

    $scope.totalUser = $scope.totalUser + 1
    addData.addUser($scope.newUser)
      .then(function (response) {
        console.log($scope.totalUser)
      })
  }
}])
