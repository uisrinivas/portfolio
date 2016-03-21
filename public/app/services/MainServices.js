(function() {
	'use strict';

	angular
	  .module('portfolio')
	  .service('MainService', MainService);

	MainService.$inject = ['$log'];

	function MainService($log) {
		//content
		$log.info("service loading...")
	}
})();