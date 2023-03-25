const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailData = loginForm.elements.email;
  const passwordData = loginForm.elements.password;

  if (!emailData.value || !passwordData.value) {
    alert("Будь ласка, заповніть всі поля");
    return;
  }
  const userData = {
    email: emailData.value,
    password: passwordData.value,
  };

  console.log(userData);
  loginForm.reset();
});
