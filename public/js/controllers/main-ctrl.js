var app = angular.module('LoanCalculator');

app.controller('MainCtrl', function ($scope, bankService) {

$scope.getInt = function () {
	bankService.getInt().then(function(res) {
		console.log(res.data);
		$scope.interest_rate = res.data;
	})
}

$scope.getInt();

$scope.calculatePayment = function() {
	$scope.totalOwed = Number($scope.principal) + (4 * (Number($scope.interest_rate)/100) * Number($scope.principal));
	$scope.monthly_payment = ($scope.totalOwed / 48);
}





});