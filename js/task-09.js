const changeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");

changeColor.addEventListener("click", getRandomHexColor);


function getRandomHexColor() {
  body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return spanColor.textContent = `${body.style.backgroundColor}`;
}

