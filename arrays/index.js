//arrays
/*

let fruits = ["apple", "orange", "banana"];

console.log(fruits);
console.log(fruits[1]);

fruits[0] = "coconut";

console.log(fruits);

fruits.push("lemon");  //adds an element

console.log(fruits);

fruits.pop(); //pops last item

console.log(fruits);

fruits.unshift("mango"); //adds to list in front
console.log(fruits);

fruits.shift(fruits); //pops first in lista

console.log(fruits);

let index = fruits.indexOf("banana"); //finds index

console.log(index);

*/

let prices = [5, 10, 15, 20];

/*
for (let i = 0; i<prices.length; i++){
    prices[i] *= 2;
    console.log(prices[i]);

}
*/

//backwards
// for (let i = prices.length - 1; i >=0;  i--){
//     console.log(prices[i]);
// }

for(let price of prices){
    console.log(price);
}