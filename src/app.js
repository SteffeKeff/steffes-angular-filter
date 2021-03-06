'use strict';
angular.module('steffeFilter', [])
	.filter('reverse', function () {
		return function (input) {
			var i, out;
			if (angular.isString(input)) {
				out = '';
				for (i = 0; i < input.length; i++) {
				out = input.charAt(i) + out;
				}
				return out;
			} else {
				return input;
			}
		};
	});