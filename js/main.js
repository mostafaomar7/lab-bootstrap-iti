let registerForm = document.getElementById("registerFormElement");
  let registerContainer = document.getElementById("registerForm");
  let loginContainer = document.getElementById("loginForm");

  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    registerContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
  });