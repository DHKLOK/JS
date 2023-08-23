let element = document.getElementById("myTitle");

element.style.backgroundColor = "lightgreen";


document.getElementById("submit").onclick = function() {
    event.preventDefault();
    var fruits = document.getElementsByName("fruits");
    fruits.forEach(fruit => {
        if (fruit.checked) {
            document.getElementById("selected").innerHTML = fruit.value;
            console.log(fruit.value);
            
        }
    });
};