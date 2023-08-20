try{
    let x = window.prompt("Enter a number");
    x = Number(x);
    console.log(`${x} is a number`);

    if(isNaN(x)) throw "this is not a number";
    if (x == "") throw "that was empty";


}
catch(error){
console.log(error);
}
finally{
    console.log("finally message");
    
}