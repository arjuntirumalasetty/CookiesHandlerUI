webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('login',[]);

__webpack_require__(2);
__webpack_require__(5);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var angular = __webpack_require__(0);
angular.module('login').controller('loginController',__webpack_require__(4));

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);
angular.module('login').service('RestService',__webpack_require__(6));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


RestService.$inject =['$http'];
function RestService($http){
	var _this = this;
	_this.login = function(userName,password){
		return 'success';
	}
}
module.exports = RestService; 

/***/ })
],[1]);