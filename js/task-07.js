const inputEl = document.querySelector("#font-size-control");
console.dir(inputEl);
const textOutput = document.querySelector("#text");
console.dir(textOutput);

inputEl.addEventListener("input", (event) => {
  textOutput.style.fontSize = `${event.currentTarget.value}px`;
});
