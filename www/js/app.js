var app = angular.module('starter', ['ionic','ngCordova','starter.controllers', 'starter.service' ,'ngOpenFB'])

        .run(function($ionicPlatform, ngFB) {
            $ionicPlatform.ready(function () {
               // postApp.submitForm;
                ngFB.init({appId: '803934303065708'});
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

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('home', {
  url: '/',
  templateUrl: 'templates/home.html'
})
  .state('registration', {
    url: "/reg",
            templateUrl: "templates/registration.html",
            controller: "registrationCtrl"
       
   
})
 .state('profile', {
    url: "/profile",
            templateUrl: "templates/profile.html",
            controller: "ProfileCtrl"
       
   
});

})