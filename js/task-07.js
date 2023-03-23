const inputEl = document.querySelector("#font-size-control");
console.dir(inputEl);
const textOutput = document.querySelector("#text");
console.dir(textOutput);

inputEl.addEventListener("input", () => {
  textOutput.style.fontSize = `${inputEl.value}px`;
});
