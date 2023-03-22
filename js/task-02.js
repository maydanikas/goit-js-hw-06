const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement("li");
  li.textContent = ingredients[i];
  li.classList.add("item");
  ul.append(li);
  console.log(li);
}
