
/* /////////////VARIABLES////////////////////
console.log("Hey whats up");
console.log("I love my cat momo");
//window.alert("I really love pizza");
let age;
let firstName = "Paul" //strings
age = 10; //ints
age = age + 1;
console.log(age);
console.log(firstName);
let student = true; //bools
console.log(student);
console.log("Hello", firstName, "you are", age, "years old");
document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled = " + student;*/

/* ////////////ARITHEMETIC/////////////////////
let student = 20;
console.log(student);
student = student + 5;
console.log(student)

student = student * 2;
console.log(student);
student = student / 2;
console.log(student);
student = student - 2;
console.log(student);
student = student % 2;


document.getElementById("").innerHTML = student;

*/

/*/////////////USER INPUT///////////////////////

//let username = window.prompt("What is your name?");
let username
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = username;


}
*/

/*//////////////TYPE CONVERSION//////////////
let age = window.prompt("How old are you");
age = Number(age);

age += 1;

console.log("you are ", age , "years old");


let x;
let y;
let z;


x = Number("3.34");
y = String(3.4);
z = Boolean("");


console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

/*///////////////CONSTANTS//////////////////

const pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter radius of the circle");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log("the circumference is: ", circumference);

*/

//////////////////MATH////////////////////
