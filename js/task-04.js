
const addButton = document.querySelector('[data-action="increment"]');
const removeButton = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector("#value");
// console.log(counter.textContent);
let counterValue = 0;


  addButton.addEventListener("click", () => {
    counterValue += 1;
    counter.textContent = counterValue;
  });
  
  removeButton.addEventListener("click", () => {
    counterValue -= 1;
    counter.textContent = counterValue;
  });




  