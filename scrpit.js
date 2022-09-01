const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

// Evento para meu botão
form.addEventListener("submit", (e) => {
  // Para não recarregar a página
  e.preventDefault();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorfor(username, "O nome de usuário é obrigatório");
  }
}

function setErrorfor(input, message) {}

function functionsetSucessFor(input) {
  const formControl = input.parentElement;

  // Adicionar classe de sucesso
  formControl.className;
}
