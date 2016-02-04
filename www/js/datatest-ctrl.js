angular.module('scplCustomer.datatestCtrl', [])

.controller('DatatestCtrl', function($scope, $http) {
    $scope.params = {};
    $scope.data = {};
    
    //$scope.params['username'] = "abc";
    //$scope.params['password'] = "xyz";
    
    
    $scope.testDB = function () {
        console.log("testing db function");

/*        $http.get('http://www.reddit.com/r/funny/new/.json', {params : $scope.params})
            .success(function(response) {
            angular.forEach(response.data.children, function(child) {
                console.log(child.data);
            });
            //console.log(response);
            
        });*/
        
        
        $http.get('http://192.168.1.7:5000', {params : $scope.params})
            .success(function(response) {
            angular.forEach(response, function(child) {
                //console.log(child);
                
                console.log(child[0].description);
                console.log(child[0].done);
                console.log(child[0].id);
                console.log(child[0].title);
                
                console.log(child[1].description);
                console.log(child[1].done);
                console.log(child[1].id);
                console.log(child[1].title);
            });
            
            //console.log(response);
        });

    };
    
});