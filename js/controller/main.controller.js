angular.module(APP_NAME).controller("MainController", MainController);

function MainController($scope, $http, OAuth){
	OAuth.getAccessToken({username:'dave', password:"secret"}).then(function(res){
		var dados = res.data	
		$http.get("http://192.168.0.130:8080/?access_token="+dados.access_token).success(function(response){
			$scope.msg = response;
		});
	});
}