//creamos el modulo y le inyectamos el modulo ngRoute y el modulo cart que hemos creado
var app = angular.module("app", ['ngRoute']);

//las rutas que vamos a utilizar para nuestro ejemplo
app.config(function($routeProvider)
{
	$routeProvider.when("/", {
		templateUrl : "usuario.html",
		controller : "usuarioController"
	})
	.when("/game", {
		templateUrl : "game.html",
		controller : "gameController"
	})
    .when("/estadisticas", {
		templateUrl : "estadisticas.html",
		controller : "estadisticasController"
	})
    .when("/pay", {
		templateUrl : "pay.html",
		controller : "payController"
	})
	.otherwise({ reditrectTo : "/" });
});


app.controller("usuarioController",  ['$scope', '$http', function ($scope, $http)
{

    $scope.userData = {};
   
    var init = function (){
        
        $http.get('../../php/userData.php')
                .success(function(data) {
                   $scope.userData.id=data[0].id;
                   $scope.userData.name=data[0].name;
            });
        
    }
   
	init();

}]);

app.controller("gameController", function($scope)
{

    $scope.gameData = {};
    var init = function (){
    $scope.gameData.id="game";
    $scope.gameData.name="name";
    }
   
	init();
   
	
});

app.controller("estadisticasController",  ['$scope', '$sce', function ($scope, $sce)
{

    $scope.estadisticasData = {};
    var init = function (){
    $scope.estadisticasData.url=$sce.trustAsResourceUrl("https://gamestatistics.shinyapps.io/trabajo_shiny_version_1/");
    }
   
	init();
   
	
}]);

app.controller("payController", function($scope)
{

    $scope.payData = {};
    var init = function (){
    $scope.payData.id="pepe";
    $scope.payData.name="manuel";
    }
   
	init();
   
	
});
