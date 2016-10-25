var app = angular.module('app', []);

app.run(['$anchorScroll', function($anchorScroll) {
	$anchorScroll.yOffset = 20;
}]);

app.controller('AnchorController', ['$anchorScroll', '$location', '$scope', function($anchorScroll, $location, $scope) {
	$scope.gotoAnchor = function(x) {
		var newHash = 'anchor' + x;
		if ($location.hash () !== newHash) {
			$location.hash(newHash);
		}
		else {
			// call $anchorScroll() explicitly,
			// since $location.hash hasn't changed
			$anchorScroll();
		}
	};

	$scope.gotoTop = function() {
		if ($location.hash() !== 'top') {
			$location.hash('top');
		}
		else {
			$anchorScroll();
		}
	}
}]);
