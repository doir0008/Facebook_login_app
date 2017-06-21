angular.module('starter.controllers', [])

.factory("Items", function ItemsFactory($http, $localStorage){
    
    
    
    
    
    
//    if($localStorage.hasOwnProperty("accessToken") === true) {
    return {
        getName: function() {
            return $http({method:'GET', url:'https://graph.facebook.com/v2.2/me', params: {
               access_token: $localStorage.accessToken, 
                fields: "name", 
                format: "json"  
            }});
        }
    }
        
        
        
        
        
        
//        $http.get("https://graph.facebook.com/v2.2/me", { 
//            params: { 
//                access_token: $localStorage.accessToken, 
//                fields: "id,name,gender,location,website,picture,relationship_status", 
//                format: "json" 
//            }}).then(function(result) {
//                $scope.profileData = result.data;
//        }, function(error) {
//            alert("There was a problem getting your profile.");
//            console.log(error);
//        });
//    
    
    
    
    
//    } else {
//        alert("Not signed in");
//        // $location.path("/login");
//    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    
//    return {
//        getAll: function() {
//            return $http({method:'GET', url:'data.json'});
//        },
//        
//        getOne: function(_id){
//            return $http({method:'GET', url:'data.json'});
//        },
//        
//        getRating: function(_id){
//            if(localStorage.getItem(_id)){
//                return localStorage.getItem(_id);
//            } else {
//                return 0;
//            }
//        }
//        
//        
//    }
//    
    
    
    
    
});