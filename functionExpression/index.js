// function expression = function without a name (anonymous function)
//avoids polluting the global scope with useless functions
//write it, then forget about it



// const greeting = function(){
//     console.log("hello")
// }
// greeting();

count = 0;

document.getElementById("increaseButton").onclick = function(){
        count +=1;
        document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function(){
    count -=1;
    document.getElementById("myLabel").innerHTML = count;
}



// function increaseCount(){
//     count +=1;
//     document.getElementById("myLabel").innerHTML = count;


// }
// function increaseCount(){
//     count -=1;
//     document.getElementById("myLabel").innerHTML = count;
    

// }

