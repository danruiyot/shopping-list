function calculate() {
    var height, weight, heightsqr, bmi_result;
    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;
 heightsqr = height * height;
// if (height = NULL && weight = NULL) {
    
// }
if(weight > 0 && height > 0){
 bmi_result = weight / heightsqr;

    // Math.round	
document.getElementById("bmi_res").innerHTML = bmi_result;
if(bmi_result < 18.5){
document.getElementById("bmi_comment").innerHTML = "Underweight";
}
    if(bmi_result > 18.5 && bmi_result < 23){
document.getElementById("bmi_comment").innerHTML = "Woow, Healthy";
    }
    if(bmi_result > 23 && bmi_result < 25){
document.getElementById("bmi_comment").innerHTML = "Overweight";
    }
    if(bmi_result > 25){
document.getElementById("bmi_comment").innerHTML = "Sorry, Obbesse";
        
    }
}

}

function update_bmi() {
    var db = new PouchDB('bmi'); 
    var height, weight, heightsqr, bmi_result;
    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;
 heightsqr = height * height;
// if (height = NULL && weight = NULL) {
    
// }
if(weight > 0 && height > 0){
 bmi_result = weight / heightsqr;

         var todo = {
              _id: new Date().toISOString(),
               height: height, 
               weight: weight,
               bmi: bmi_result
             };
              db.put(todo, function callback(err, result) {
                   if (!err) {
                        console.log('Successfully updated bmi'); 
                    } 
                });

}

}

// movies
//   .get('tdkr')
//   .then(function(doc) {
//     doc.year = "2012"    // new field
//     console.log(doc._rev) // doc has a '_rev' field
//     return db.put(doc)   // put updated doc, will create new revision
//   }).then(function (res) {
//     console.log(res)
//   })
// delete items
// movies
//   .get('tdkr')
//   .then(function(doc) {
//     return movies.remove(doc) // return the promise
//   }).then(function(res) {
//     console.log("Remove operation response", res)
//   })

// // retrieve all
// movies
//   .allDocs({include_docs: true})
//   .then(function (docs) {
//     console.log(docs)
//   })