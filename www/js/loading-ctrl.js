angular.module('scplCustomer.loadingCtrl', [])

.controller('LoadingCtrl', function($scope, $ionicLoading) {
    $scope.show = function() {
        $ionicLoading.show({
            template: 'Loading...', 
            duration: 5000 
        });
    };
    
    $scope.hide = function(){
        $ionicLoading.hide();
    };
});