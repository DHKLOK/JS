//const promise = new Promise((resolve, reject) => {
async function loadFile() {
    let fileLoaded = false;

    if (fileLoaded) {
        //resolve("file loaded");
        return "file loaded"
    }
    else {
        //reject("file not loaded");
        throw "file not loaded"
    }

};


async function startProscess() {
    try {
        let message = await loadFile();
        console.log(message);
    }
    catch (error) {
        console.log(error);

    }
}

startProscess();

// fileLoaded().then(value => console.log(value))
//         .catch(error => console.log(error));


// const wait = (time) => new Promise(resolve => {
//     setTimeout(resolve, time)



// })


// wait(10000).then( () => console.log("thanks for waiting"));



