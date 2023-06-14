/////////////USER INPUT///////////////////////

//let username = window.prompt("What is your name?");
let username
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = username;


}