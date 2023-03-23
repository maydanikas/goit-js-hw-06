const inputEl = document.querySelector("#name-input");
const usernameElOutput = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (inputEl.value === "") {
    usernameElOutput.innerHTML = "Anonymous";
    return;
  }
  usernameElOutput.innerHTML = inputEl.value;
});
