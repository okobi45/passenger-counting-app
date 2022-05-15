
let count = 0;
let newPass = document.getElementById("new-passenger");
let passRec = document.getElementById("passenger-record");


function myPass() {
    count += 1;
    newPass.textContent = count; 
}