
const myButton = document.querySelector("#toggleButton")
const myImage = document.querySelector("#theMatrix");



myButton.addEventListener("click", () =>{
    if (myImage.style.display == "none"){
        myImage.style.display = "block"
    }
    else{
        myImage.style.display = "none"
    }
} )