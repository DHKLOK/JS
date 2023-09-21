//const element = document.getElementById("myDiv");
//element.onmouseover = doSomething;


const colorBox = document.getElementById("myDiv")

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  
  colorBox.addEventListener('mouseover', () => {
    const randomColor = getRandomRGBColor();
    colorBox.style.backgroundColor = randomColor;
  })



