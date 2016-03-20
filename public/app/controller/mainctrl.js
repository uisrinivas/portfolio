(function() {
	'use strict';

	angular
	  .module('portfolio')
	  .controller('MainController', MainController);

	MainController.$inject = ['$scope'];

	function MainController($scope) {
		var vm=this;
		vm.appName="Personal portfolio";
		vm.appVersion=angular.version.full;

	}
})();