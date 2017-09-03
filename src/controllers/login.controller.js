'use strict';
LoginController.$inject = ['$scope','RestService'];

function LoginController($scope,rs){
	$scope.value = 'Controller is working';

	$scope.loginData = function(){
		console.log($scope.userName);
		console.log($scope.password);
		var result = rs.login($scope.userName,$scope.password);
		console.log(result);
	}
}
module.exports = LoginController;