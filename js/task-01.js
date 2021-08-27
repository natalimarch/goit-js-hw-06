const categories = document.querySelector("#categories");
// console.log(categories);
const items = categories.querySelectorAll(".item");
// console.log(items);
const itemsArr = Array.from(items);
// console.log(itemsArr);
console.log("Number of categories:", itemsArr.length);

for (const itemEl of itemsArr) {
    const headerEl = itemEl.querySelector("h2");
    console.log("Category:", headerEl.textContent); 

    const listEl = itemEl.querySelectorAll("li");
    console.log("Elements:", listEl.length)
}
