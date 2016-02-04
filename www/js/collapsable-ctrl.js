angular.module('scplCustomer.collapsableCtrl', [])

.controller('CollapsableCtrl', function($scope, $ionicLoading) {
    $scope.groups = [];
    
    $scope.groups[0] = {
        name: 'Ordered Items',
        items: [
            '<div class="row"><div class="col col-75">Letterhead</div><div class="col"><strong>500</strong></div></div>' + 
            '<div class="row"><div class="col col-75">Envelope</div><div class="col"><strong>500</strong></div></div>' + 
            '<div class="row"><div class="col col-75">Rubber Stamp</div><div class="col"><strong>3</strong></div></div>'
        ],
        show: false
    };
    
    $scope.groups[1] = {
        name: 'Specifications',
        items: [
            'Envelope size C4<br>Rubber Stamp in circle, square and rectangle shape'
        ],
        show: false
    };
    
    $scope.groups[2] = {
        name: 'Payment',
        items: [
            'Order# 2345 Invoice# 5544 for Rs.1500 paid<br>Order# 2345 Invoice# 5634 for Rs.1000 not paid'
        ],
        show: false
    };
    
    $scope.groups[3] = {
        name: 'Delivery',
        items: [
            'Challan# 66555 issued on 02 Feb 2016<br>Despatched through DHT Consignment# DCV9876'
        ],
        show: false
    };
    
    
    $scope.toggleGroup = function(group) {
        group.show = !group.show;
    };
    
    $scope.isGroupShown = function(group) {
        return group.show;
    };
});