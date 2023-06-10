let form = document.querySelector("form");
let email = document.querySelector(".email");
let text = document.querySelector(".text");
let password = document.querySelector(".password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  form.classList.add("error");
  form.classList.remove("valid");

  if (email.value === "") {
    text.innerText = "Enter email";
  } else if (!email.value.match(emailPattern)) {
    text.innerText = "Please enter a valid email";
  } else if (password.value === "") {
    text.innerText = "Enter password";
  } else if (password.value.length < 6) {
    text.innerText = "Password should be at least 6 characters long";
  } else {
    form.classList.replace("error", "valid");
    text.innerText = "Valid";
    form.submit(); // Submit the form
  }
});
