// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

/*
angular.module('starter', ['ionic', 'ngCordovaOauth', 'ngStorage', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});


*/



var app = angular.module('starter', ['ionic', 'ngStorage', 'ngCordovaOauth'])

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html'
            // controller: 'AppCtrl'
        })
        .state('app.login', {
            url: '/login',
            views: {
                'menuContent': {
                    templateUrl: 'templates/login.html',
                    controller: 'LoginController'            
                }
            }
        })
        .state('app.profile', {
            url: '/profile',
            views: {
                'menuContent': {
                    templateUrl: 'templates/profile.html',
                    controller: 'ProfileController'
                }
            }

        })
//        .state('feed', {
//            url: '/feed',
//            templateUrl: 'templates/feed.html',
//            controller: 'FeedController'
//        });
    $urlRouterProvider.otherwise('/login');
});

app.controller("LoginController", function($scope, $cordovaOauth, $localStorage, $location) {

//    $scope.login = function() {
//        $cordovaOauth.facebook("token", ["email", // "read_stream",
//                                                   "user_website", "user_location", "user_relationships"]).then(function(result) {
//            $localStorage.accessToken = result.access_token;
//            $location.path("/profile");
//        }, function(error) {
//            alert("There was a problem signing in!  See the console for logs");
//            console.log(error);
//        });
//    };

    
    $cordovaOauth.facebook("token", ["email", // "read_stream",
                                                   "user_website", "user_location", "user_relationships"]).then(function(result) {
            $localStorage.accessToken = result.access_token;
            $location.path("/profile");
        }, function(error) {
            alert("There was a problem signing in!  See the console for logs");
            console.log(error);
        });
    
    
    
    
    
    
    
});

app.controller("ProfileController", function($scope, $http, $localStorage, $location) {

//    $scope.init = function() {
//        if($localStorage.hasOwnProperty("accessToken") === true) {
//            $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: $localStorage.accessToken, fields: "id,name,gender,location,website,picture,relationship_status", format: "json" }}).then(function(result) {
//                $scope.profileData = result.data;
//            }, function(error) {
//                alert("There was a problem getting your profile.  Check the logs for details.");
//                console.log(error);
//            });
//        } else {
//            alert("Not signed in");
//            $location.path("/login");
//        }
//    };
    
    
            if($localStorage.hasOwnProperty("accessToken") === true) {
            $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: $localStorage.accessToken, fields: "id,name,gender,location,website,picture,relationship_status", format: "json" }}).then(function(result) {
                $scope.profileData = result.data;
            }, function(error) {
                alert("There was a problem getting your profile.  Check the logs for details.");
                console.log(error);
            });
        } else {
            alert("Not signed in");
            $location.path("/login");
        }
    
    
    
    

});

//app.controller("FeedController", function($scope, $http, $localStorage, $location) {
//
//    $scope.init = function() {
//        if($localStorage.hasOwnProperty("accessToken") === true) {
//            $http.get("https://graph.facebook.com/v2.2/me/feed", { params: { access_token: $localStorage.accessToken, format: "json" }}).then(function(result) {
//                $scope.feedData = result.data.data;
//                $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: $localStorage.accessToken, fields: "picture", format: "json" }}).then(function(result) {
//                    $scope.feedData.myPicture = result.data.picture.data.url;
//                });
//            }, function(error) {
//                alert("There was a problem getting your profile.  Check the logs for details.");
//                console.log(error);
//            });
//        } else {
//            alert("Not signed in");
//            $location.path("/login");
//        }
//    };
//
//});