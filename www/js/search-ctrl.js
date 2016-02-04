angular.module('scplCustomer.searchCtrl', [])

.controller('SearchCtrl', function($scope, $state, $ionicPopover) {
        //console.log('search controller');
    $scope.showSearch = false;
    $scope.searchText = "";
    
    $scope.clearmyText = function() {
        $scope.searchText = ""; // this doesnt work, although function is called
        console.log('ng-click of clear icon');
    };
});