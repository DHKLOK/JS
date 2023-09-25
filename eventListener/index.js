//.addEventListener(event, function, usecapture);



const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue);

function changeBlue(){
    alert(`you selected ${this.id}`)
    this.style.backgroundColor = "blue";
    
}



// innerDiv.addEventListener("mouseover", changeRed);
// innerDiv.addEventListener("mouseout", changeGreen);


// function changeRed(){
//     innerDiv.style.backgroundColor = "red";
// }

// function changeGreen(){
//     innerDiv.style.backgroundColor = "green";
// }