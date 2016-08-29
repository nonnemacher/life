var app = angular.module('app', []);

app.run(function($rootScope){ 
    $rootScope.title = 'Carlos';
});

app.controller('pessoa', function($scope) {
    $scope.send = function() {

    };
}) 

