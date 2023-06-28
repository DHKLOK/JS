//2d arrays - an array of arrays

let fruits = ["banana", "apples", "oranges"];
let vegis = ["carrot", "broc", "onion"];
let meats = ["chicken", "beef", "pork"];


let grocerylist = [fruits, vegis, meats];

console.log(grocerylist[1][1])

for(let list of grocerylist){
    for(let food of list ){
        console.log(food);
    }

}
