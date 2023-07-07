//Array.map() = creates a provided callback function once for 
// each array element and creates a new array
///////////////////////////////////////////////////////////////

let prices = [414, 35, 495, 954];
let pricesNew = prices.map(addThirty);


function addThirty(number){
    return number + 30;
}
console.log(pricesNew);

/////////////////////////////////////
let nums = [1,3,6,7]

function cubed(element){
    return Math.pow(element, 3);
}

let newNums = nums.map(cubed);

console.log(newNums);
