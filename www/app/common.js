function add_user() {
    var user = new PouchDB('user');
    var username, dob, height, weight, email, gender;

    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;
    username = document.getElementById("username").value;
    dob = document.getElementById("dob").value;
    email = document.getElementById("email").value;
    gender = document.getElementById("gender").value;
    if (username != null && gender != null && height != null && weight != null){

             var data = {
              _id: new Date().toISOString(),
               height: height, 
               weight: weight,
               username: username,
               dob: dob,
               email: email,
               gender: gender,
             };
             user.put(data, function callback(err, result) {
                   if (!err) {
                        console.log('Successfully added a user'); 
    window.location.assign("index.html");  
                    } 
                });
    }else{
    window.location.assign("register.html");  

    }

}
function update() {
    var user = new PouchDB('user');
    var username, dob, height, weight, email, gender;
    my_id = document.getElementById("my_id").value;
    username = document.getElementById("username").value;
    dob = document.getElementById("dob").value;
    email = document.getElementById("email").value;
    gender = document.getElementById("gender").value;

             user.get(my_id)
             .then(function(doc) {
            //    doc.year = "2012"    // new field
               doc.username= username,
               doc.dob= dob,
               doc.email= email,
               doc.gender= gender,
               console.log(doc._rev) // doc has a '_rev' field
               return user.put(doc)   // put updated doc, will create new revision
             }).then(function (res) {
               console.log(res)
             })
}

// controls the registration part
function next() {
    //hide content with id first and show content with id second
    document.getElementById("second").style.display = "block";
    document.getElementById("first").style.display = "none";
    
}
function previous() {
    //hide content with id second and show content with id first
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    
}