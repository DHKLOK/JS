// Callback = a function passed as an argument to another function

/*
let total = sum (2,3);

function sum(x,y){
    let result = x + y;
    return result;

}
*/

function sum(x, y, callback){
    let result = x + y;
    callback(result);
}

sum(2,3, displayDOM);



function displayConsole(output){
    console.log(output);

}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;   
}
