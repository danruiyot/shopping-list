var user = new PouchDB('user');

// retrieve all
user.allDocs({include_docs: true})
.then(function (docs) {
  if (docs['total_rows'] === 0) {
    window.location.assign("register.html");  
    console.log('no user');
  }else{
    console.log('user set');
    
  }
})
fiti.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "main.html"
    })
    .when("/exercise", {
      templateUrl : "exercise.html"
    })
    .when("/food", {
      templateUrl : "food.html"
    })
    .when("/bmi", {
      templateUrl : "bmi.html"
    })
    .when("/recipe", {
      templateUrl : "recipe.html"
    })
    .when("/register", {
      templateUrl : "register.html"
    })
    .when("/user", {
        templateUrl : "user.html"
      });
  });


