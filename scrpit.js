const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

// Evento para meu botão
form.addEventListener("submit", (e) => {
  // Para não recarregar a página
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  // Se meu nome estiver vazio eu chamo a função de erro
  // Checando meu input Nome
  if (usernameValue === "") {
    setErrorfor(username, "O nome de usuário é obrigatório");
  } else {
    setSucessFor(username);
  }

  // Checando meu input email
  if (emailValue === "") {
    setErrorfor(email, "Por favor, insira um email válido");
  } else if (!checkEmail(emailValue)) {
    setErrorfor(email, "Por favor, insira um email válido");
  } else {
    setSucessFor(email);
  }

  // Checando minha senha
  if (passwordValue === "") {
    setErrorfor(password, "A senha é obrigatória");
  } else if (passwordValue.length < 7) {
    setErrorfor(password, "A senha precisa ter no mínimo 7 caracteres");
  } else {
    setSucessFor(password);
  }

  // Checando minha confirmação de senha
  if (passwordConfirmationValue === "") {
    setErrorfor(passwordConfirmation, "A confirmação de senha é obrigatória");
  } else if (passwordConfirmationValue !== password) {
    setErrorfor(passwordConfirmation, "As senhas não conferem");
  } else {
    setSucessFor(passwordConfirmation);
  }

  function setErrorfor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Adicionar mensagem de erro
    small.innerText = message;

    // Adicionar classe de erro
    formControl.className = "form-control error";
  }

  function setSucessFor(input) {
    const formControl = input.parentElement;

    // Adicionar classe de sucesso
    formControl.className = "form-control success";
  }

  // Checando para ver se o email está tudo correto

  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
}
