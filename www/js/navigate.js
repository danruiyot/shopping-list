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