// synchronous code = in an order sequence.
// step-by-step linear instructions (start now, finish now)


// asynchronous code = out of sequence
//         ex access a database
//         fetch a File
//         tasks that take timer
//         (start now, finish later)



console.log("Start");
console.log("this step is synchronous");
console.log("end");


console.log("start");
setTimeout(() => console.log("This is asynchronous"), 5000)
console.log("end");







