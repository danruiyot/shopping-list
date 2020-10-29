
function calculate() {
    var height, weight, weightsqr, bmi_result;
    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;
 heightsqr = height * height;
// if (height = NULL && weight = NULL) {
    
// }
if(weight > 0 && height > 0){
    // Math.round	
 bmi_result = weight / heightsqr;
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
