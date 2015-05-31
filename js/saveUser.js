module = angular.module('myApp',[]);
module.controller('NewUserController',function($scope){
	$scope.save=function(){
		if ($scope.userForm.$valid) {
			alert('user saved');
			 $scope.reset();
		}else{
			alert("invalid");
		}


	};
	$scope.reset=function(){
		$scope.user={nom:'',prenom:'',email:'',password:'',password_conf:''};
	}
});
// -------------

module.directive('validPasswordC', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.userForm.password.$viewValue;
                ctrl.$setValidity('noMatch', !noMatch)
            })
        }
    }
});