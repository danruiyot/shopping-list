    // creating the controller and inject Angular's $scope
    fiti.controller('mainController', function($scope, $http) {
        var user = new PouchDB('user');

        // create a message to display in our view
        $scope.message = 'Excited to build hybrid app!';
        $scope.name = 'Kaa Fiti';
        $scope.showImage=false;
        $scope.title ="Home";

        $http.get("./data/food.json")
        .then(function(response) {
          $scope.content = response.data;
          $scope.statuscode = response.status;
          $scope.names = response.data;
        });

        $scope.home = function () {
            $scope.title ="Home";
            
        };
        $scope.bmi = function () {
            $scope.title ="Calculate your bmi";
        };
        $scope.exercise = function () {
            $scope.title ="Exercise";
        };
        $scope.food = function () {
            $scope.title ="Food";
        };
        $scope.recipe = function () {
            $http.get("./data/recipes.json")
            .then(function(response) {
              $scope.content = response.data;
              $scope.statuscode = response.status;
              $scope.recipes = response.data;
            });
            $scope.title ="Recipe";
        };       
        $scope.user = function () {
            // movies
         user.allDocs({include_docs: true})
          .then(function (docs) {
            console.log(docs['rows']['0'])
            user_detail = docs['rows']['0']['doc'];
            $scope.title ="Manage your details";
            $scope.username = user_detail['username'];
            $scope.dob =user_detail['dob'];
            $scope.gender =user_detail['gender'];
            $scope.email =user_detail['email'];
            $scope.id =user_detail['_id'];
          })
            $scope.bmi_res ="25.8";
        };
        // height: "1.6"
        // weight: "85"
        // username: "dan ruiyot"
        // dob: "2020-03-08"
        // email: "danruiyot@gmail.com"
        // gender: "male"
        // _id: "2020-03-08T12:30:49.686Z"
        $scope.register = function () {
            var db = new PouchDB('user');
            var bmi = new PouchDB('bmi');
            $scope.title ="Manage your details";
            $scope.username ="John Doe";
            $scope.dob ="3/8/1995";
            $scope.gender ="Male";
            $scope.bmi_res ="25.8";
        };
        $scope.recipez = function(id) {
            $http.get("./data/recipes.json")
            .then(function(response) {
            //   $scope.recipes = response.data;
            responses = response.data;
            for (let i = 0; i < responses.length; i++) {
                // console.log(responses[i].id);
                if (responses[i].id === id) {
                    console.log(responses[i]);
                    $scope.recipesz = responses[i];
                    $("#table").hide();
                    $("#tables").show();
                    }
            }
      
            // console.log(response.data);

        // templateUrl : "user.html";
    
            });
            // console.log(id);

            $scope.title ="Recipe";
          }

    });