
// const nameTag = document.createElement("h1")
// nameTag.textContent = window.prompt("enter your name");
// document.body.append(nameTag);


const mylist = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
mylist.prepend(listItem);