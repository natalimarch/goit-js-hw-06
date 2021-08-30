const changeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");

changeColor.addEventListener("click", addColor);

function addColor() {
  let colorChange = getRandomHexColor();
  body.style.backgroundColor = colorChange;
  return spanColor.textContent = colorChange;
}

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}

