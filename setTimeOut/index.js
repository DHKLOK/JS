function firstMessage(){
    alert("buy this course for $500")
}
function secondMessage(){
    alert("THIS IS NOT A SCAM")
}
function thirdMessage(){
    alert("THIS IS A GOOD DEAL")
}
function doIT(){
    alert("DO IT")
}

let timer1 = setTimeout(firstMessage, 3000);
let timer2 = setTimeout(secondMessage, 10000);
let timer3 = setTimeout(thirdMessage, 15000);

document.getElementById("buyButton").onclick = function() {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("Thanks for buying");

}