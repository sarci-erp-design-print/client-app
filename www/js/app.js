angular.module('scplCustomer', ['ionic', 'scplCustomer.routes', 'scplCustomer.popupCtrl', 'scplCustomer.loadingCtrl',   'scplCustomer.collapsableCtrl', 'scplCustomer.otherCtrl', 'scplCustomer.dropmenuCtrl', 'scplCustomer.searchCtrl', 'scplCustomer.datatestCtrl'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    } 
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})