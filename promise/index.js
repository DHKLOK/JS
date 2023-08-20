// const promise = new Promise((resolve, reject) => {

//     let fileLoaded = false;


//     if(fileLoaded){
//         resolve("file loaded");
//     }
//     else{
//         reject("file not loaded");

//     }

// });

// promise.then(value => console.log(value))
//         .catch(error => console.log(error));


const wait = (time) => new Promise(resolve => {
    setTimeout(resolve, time)



})


wait(10000).then( () => console.log("thanks for waiting"));



