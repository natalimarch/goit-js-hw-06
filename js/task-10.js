const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destrBtn = document.querySelector('button[data-destroy]');
const output = document.querySelector("#boxes");



// console.log(input.value);

// input.addEventListener("input", amountOnInput);

// function amountOnInput(event) {
//   amount = event.currentTarget.value;
// }
// console.log(amount);

const createBoxes = () => {
  let amount = input.value;
  output.innerHTML = "";
  let outputStor = [];

for (let i = 0; i < amount; i += 1) {
  const box = document.createElement("div");
  outputStor.push(box);
  box.style.width = 30 + i * 10 + "px";
  box.style.height = 30 + i * 10 + "px";
  box.style.backgroundColor = getRandomHexColor();
}
output.append(...outputStor);
};
console.log(output);

createBtn.addEventListener("click", createBoxes);

destrBtn.addEventListener("click", destrBoxes);

function destrBoxes () {
  output.innerHTML = "";
}

// destrBtn.addEventListener("click", () => {
//   destrBtn.removeEventListener("click", );
// });


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
