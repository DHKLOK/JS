// let element = document.getElementById("myTitle");

// element.style.backgroundColor = "lightgreen";


// document.getElementById("submit").onclick = function() {
//     event.preventDefault();
//     var fruits = document.getElementsByName("fruits");
//     fruits.forEach(fruit => {
//         if (fruit.checked) {
//             document.getElementById("selected").innerHTML = fruit.value;
//             console.log(fruit.value);
            
//         }
//     });
// };

let vegetables = document.getElementsByTagName("li");

vegetables[1].style.backgroundColor = ("lightgreen");

let goodyumyum = document.getElementsByClassName("desserts");
var dessertsArray = Array.from(goodyumyum); // Convert HTMLCollection to array

dessertsArray.forEach(dessert => {
  dessert.style.backgroundColor = "blue";
});


console.log(dessertsArray);

