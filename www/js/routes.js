angular.module('scplCustomer.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/login', 
        templateUrl: 'tpl/login.html'
    });
    
    $stateProvider.state('profile', {
        url: '/profile', 
        templateUrl: 'tpl/profile.html'
    });


    $stateProvider.state('home', {
        url: '/home', 
        abstract: true,
        templateUrl: 'tpl/home.html'
    });
    
    $stateProvider.state('home.catalogue', {
        url: '/catalogue', 
        views: {
            'tab-catalogue': {
                templateUrl: 'tpl/catalogue.html'    
            }
        }
    });

    $stateProvider.state('home.request', {
        url: '/request', 
        views: {
            'tab-catalogue': {
                templateUrl: 'tpl/request.html'    
            }
        }
    });

    $stateProvider.state('home.reqmessage', {
        url: '/reqmessage', 
        views: {
            'tab-catalogue': {
                templateUrl: 'tpl/req-message.html'    
            }
        }
    });


    $stateProvider.state('home.orderlist', {
        url: '/orderlist', 
        views: {
            'tab-orderlist': {
                templateUrl: 'tpl/orderlist.html'    
            }
        }
    });

    $stateProvider.state('home.orddetails', {
        url: '/orddetails', 
        views: {
            'tab-orderlist': {
                templateUrl: 'tpl/ord-details.html'    
            }
        }
    });

    $stateProvider.state('home.modify', {
        url: '/modify', 
        views: {
            'tab-orderlist': {
                templateUrl: 'tpl/modify.html'    
            }
        }
    });

    $stateProvider.state('home.modmessage', {
        url: '/modmessage', 
        views: {
            'tab-orderlist': {
                templateUrl: 'tpl/mod-message.html'    
            }
        }
    });

    $stateProvider.state('home.reorder', {
        url: '/reorder', 
        views: {
            'tab-orderlist': {
                templateUrl: 'tpl/reorder.html'    
            }
        }
    });

    $stateProvider.state('home.reordmessage', {
        url: '/reordmessage', 
        views: {
            'tab-orderlist': {
                templateUrl: 'tpl/reord-message.html'    
            }
        }
    });

 
    $urlRouterProvider.otherwise('/login');
});