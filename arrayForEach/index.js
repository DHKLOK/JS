//Array.ForEach() = executes a provided callback function once for each array Element;
//

let students = ["bill", "ted", "ben", "tony", "pablo", "mohammad"];
students.forEach(capitalize);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1)
}

function print(element){
    console.log(element);

}

students.forEach(print);

let prices = [123.32, 4141.16, 5939.89, 234.42, 20.52, 40.09];
let total = 0;

function addTotal(price){
    total += price;
}

prices.forEach(addTotal);
console.log(total);

