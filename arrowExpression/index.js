// const greeting = function(userName){
//     console.log(`Hello ${userName}`)
// }


const greeting = userName => console.log(`Hello ${userName}`);
// You dont need parathese for the argument, but if you have 2 or more you do need parathese
greeting("sam");


// const percent = function(x,y){
//     return x/y * 100;
// }

const percent = (x,y) => x/y * 100;


console.log(percent(45,50));


let studentGrades = [100,50,90,60,80,70];


studentGrades.sort((x,y) => y - x);

studentGrades.forEach((element) => console.log(element));

// function decending(x,y){
//     return y - x;

// }

// function print(element){
//     console.log(element);

// }