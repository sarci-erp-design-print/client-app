angular.module('scplCustomer.popupCtrl', [])

.controller('PopupCtrl', function($scope, $state, $timeout, $ionicPopup) {

    $scope.ordRequestAlert = {
        title: "Order request submitted", 
        content: "Your request has been sent to our sales team. Someone will get in touch with you soon.", 
        returnState: "home.catalogue" 
    };
    
    $scope.reordRequestAlert = {
        title: "Reorder request submitted", 
        content: "Your request has been sent to our sales team. Someone will get in touch with you soon.", 
        returnState: "home.orderlist" 
    };
    
    $scope.modifyRequestAlert = {
        title: "Change request submitted", 
        content: "Your request has been sent to our sales team. Someone will get in touch with you soon.", 
        returnState: "home.orderlist" 
    };


    // Triggered on a button click, or some other target
    $scope.showPopup = function() {
        $scope.data = {};

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
                template: '<input type="password" ng-model="data.wifi">',
                title: 'Enter Mobile Number',
                subTitle: 'Please check your messages for the password',
                scope: $scope,
                buttons: [
                        { text: 'Cancel' },
                        {
                            text: '<b>Post</b>',
                            type: 'button-positive',
                            onTap: function(e) {
                                if (!$scope.data.wifi) {
                                    //don't allow the user to close unless he enters wifi password
                                    e.preventDefault();
                                } else {
                                    return $scope.data.wifi;
                                }
                            }
                        },
                ]
        });
        
        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
        
        $timeout(function() {
            myPopup.close(); //close the popup after 5 seconds for some reason
        }, 5000);
    };

    
    /*
    // A confirm dialog
    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Consume Ice Cream',
            template: 'Are you sure you want to eat this ice cream?'
        });
        
        confirmPopup.then(function(res) {
            if(res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    };    
    */
    
    
    // An alert dialog
    $scope.showAlert = function(alertObj) {
        var alertPopup = $ionicPopup.alert({
            title: alertObj.title, 
            template: alertObj.content, 
            okType: 'button-positive' 
        });
        
        alertPopup.then(function(res) {
            $state.go(alertObj.returnState);
        });
    };
});