var app = angular.module('directiveModule', [])

app.directive('scrolly', [function () {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			var raw = element[0]
			element.bind('scroll', function () {

				//at the bottom
				if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
					scope.$apply(attrs.scrolly)
				}
			})
		}
	}
}])