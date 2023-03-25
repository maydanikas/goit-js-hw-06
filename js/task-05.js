const inputEl = document.querySelector("#name-input");
const usernameElOutput = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (!event.currentTarget.value) {
    usernameElOutput.innerHTML = "Anonymous";
    return;
  }
  usernameElOutput.innerHTML = inputEl.value;
  console.log(event.currentTarget.value);
});

// 5. inputEl.value === "" - це ми можемо замінити на!inputEl.value. (2 частина)
//  В тебе є подія тобі не потрібно зовні брати inputEl в тебе для цього є currentTarget
