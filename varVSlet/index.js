//Variable scope = where a variable is accessible

//let = variable are limited to block scope
//var = variable are limited to function()

//global variable = is declared outside any function
//if global, var will change browsers window properties


/*
for(let i = 1;i<=3; i+=1){
    //console.log(i);

}
*/


//above code doesnt work because let is limited to the block
//so the below console.log(i) will not be able to find the varible


//var localName = "VeryBigTaco";  These would unintentionally change the windows properties since var is global.
//var name = "small taco";


let localName = "hotDogTime";
let name = "hotDogGuzzler";

//above can only be accessed locally and within the block that it was inputed to. making these safer generally.



