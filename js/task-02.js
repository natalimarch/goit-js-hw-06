const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1

// const ingredientsList = document.querySelector("#ingredients");
// let ingList = [];
// for (const ingredient of ingredients) {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;
//   listItem.classList.add("item");
//   ingList.push(listItem);
// }

// ingredientsList.append(...ingList);
// console.log(ingredientsList);

// 2

const ingredientsList = ingredients.map(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  return listItem;
  
})

const ingredientsUl = document.querySelector("#ingredients");
ingredientsUl.append(...ingredientsList);
console.log(ingredientsUl);