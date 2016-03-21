(function() {
	'use strict';

	angular
	  .module('portfolio')
	  .controller('MainController', MainController);

	MainController.$inject = ['$scope','MainService','appconstants'];

	function MainController($scope,MainService,appconstants) {
		var vm=this;
		vm.appName=appconstants.APP_NAME;
		vm.appVersion=appconstants.APP_VERSION;
		vm.myser=function(MainService){
			return MainService;
		};

	}
})();