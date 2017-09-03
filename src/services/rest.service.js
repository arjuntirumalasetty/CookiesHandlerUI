'use strict';

RestService.$inject =['$http'];
function RestService($http){
	var _this = this;
	_this.login = function(userName,password){
		return 'success';
	}
}
module.exports = RestService; 