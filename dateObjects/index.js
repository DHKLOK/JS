let date = new Date();

function setDate(){
date = new Date().toLocaleString();
document.getElementById("myLabel").innerHTML = date;
}
setInterval(setDate, 1000);



