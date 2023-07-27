// const body = document.body
// const div = document.createElement("div");
// const strong = document.createElement("strong")

// strong.innerText = "Hello world"
// div.append(strong);

// body.append(div)


const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye= document.querySelector("#bye");

//spanBye.remove();
div.append(spanBye);

console.log(spanHi.title)
spanHi.setAttribute("title", "Checkem")
console.log(spanHi.title)
spanHi.removeAttribute("title");
console.log(spanHi.title)

console.log(spanHi.dataset.test)
console.log(spanBye.dataset.longName)