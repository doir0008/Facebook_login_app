angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout, $cordovaOauth, $localStorage, $location, $http) {

    $scope.isDisabled = true;

    $scope.login = function() {
        $cordovaOauth.facebook("token", ["email", "user_website"]).then(function(result) {
            $localStorage.accessToken = result.access_token;
            // $location.path("/profile");
            $scope.isDisabled = false;
            
            $scope.getFacebookName();
        }, function(error) {
            alert("There was a problem signing in!  See the console for logs");
            console.log(error);
        });
    };
    
    

    $scope.changeBtn = function() {
        if($localStorage.hasOwnProperty("accessToken") === true) {
            return true;
        } else {
            return false;
        }
    }
    
    $scope.logout = function() {
        delete $localStorage.accessToken;
        $scope.isDisabled = true;
    }
    
    
    $scope.getFacebookName = function() {
        if($localStorage.hasOwnProperty("accessToken") === true) {

            $http.get("https://graph.facebook.com/v2.2/me", { 
                params: { 
                    access_token: $localStorage.accessToken, 
                    fields: "name", 
                    format: "json" 
                }}).then(function(result) {
                    $scope.profileData = result.data;
            }, function(error) {
                alert("There was a problem getting your profile.");
                console.log(error);
            });            
        } else {
            alert("Not signed in");
            // $location.path("/login");
        }
    }

    
});


