const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement("li");
//   li.textContent = ingredients[i];
//   li.classList.add("item");
//   ul.append(li);
//   console.log(li);
// }
const newArr = [];
ingredients.map((el) => {
  const li = document.createElement("li");
  li.textContent = el;
  console.log(li);
  newArr.push(li);
});

// console.log(newArr);

ul.append(...newArr);
