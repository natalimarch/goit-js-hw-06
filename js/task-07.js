const inputColor = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputColor.addEventListener("input", (event) => {
    spanText.style.fontSize = `${event.target.value}px`;
  });