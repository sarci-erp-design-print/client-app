angular.module('scplCustomer.dropmenuCtrl', [])

.controller('DropmenuCtrl', function($scope, $state, $ionicPopover) {
    $ionicPopover.fromTemplateUrl('./tpl/dropmenu.html', {
            scope: $scope,
        }).then(function(popover) {
            $scope.popover = popover;
        });
    
     $scope.showMenu = function($event) {
         $scope.popover.show($event);
     };
    
     $scope.menuclickReorder = function() {
         $state.go('home.reorder');
         $scope.popover.hide();
     };
    
     $scope.menuclickChange = function() {
         $state.go('home.modify');
         $scope.popover.hide();
     };
});