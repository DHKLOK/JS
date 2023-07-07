//array.reduce() = reduces an array to a single value

let prices = [13,19,34,95,77,60];
let total = prices.reduce(checkOut);

console.log(`The total is $${total}`);


function checkOut(total, ele){
    
    return total + ele;

}
