const inputName = document.querySelector("#name-input");
const inputAdd = document.querySelector("#name-output");
console.log(inputName.textContent);
console.log(inputAdd.textContent);

inputName.addEventListener("input", (event) => {
  if (event.currentTarget.value !== "") {
    inputAdd.textContent = event.currentTarget.value;
  } else {
    inputAdd.textContent = "Anonymous";
  }
  });