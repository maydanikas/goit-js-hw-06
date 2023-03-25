const inputEl = document.querySelector("#validation-input");
const inputLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length > 0 && inputEl.value.length <= inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
