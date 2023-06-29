let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;
let g = 7;


////// NO GOOD ///////
/*
function sum(a, b){
    return a + b;
}
function sum2(a, b, c){
    return a + b + c;
}

*/

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
return total;
}

console.log(sum(a,b,c,d,e));

