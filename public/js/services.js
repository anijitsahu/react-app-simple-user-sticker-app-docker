var app = angular.module('serviceModule', [])

app.service('addData', function ($http) {
	this.addUser = function (user) {
		return $http({
			method: 'POST',
			url: '/adduser/',
			data: user
		})
	}

	this.getUser = function (id) {
		return $http({
			method: 'GET',
			url: '/getdata/' + id
		})
	}
})