var app = angular.module('LoanCalculator');

app.service('bankService', function($http) {

this.getInt = function () {
	return $http({
		method: 'GET',
		url: 'http://localhost:8080/interest_rate'
	})
}



});