let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");
let counter = 0;

decrementBtn.addEventListener("click", function () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  // return counterValue;
});
incrementBtn.addEventListener("click", function () {
  counterValue += 1;
  valueEl.textContent = counterValue;
  // return counterValue;
});
