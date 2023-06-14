///////////////CONSTANTS//////////////////

const pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter radius of the circle");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log("the circumference is: ", circumference);