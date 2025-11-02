const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const TELEFONE_REGEX = /^\(\d{2}\)\d{5}-\d{4}$/;
const CEP_REGEX = /^\d{5}-\d{3}$/;

function initCadastro() {
  console.log("pagina cadastro OK");
}

function showFeedback(valid, msg, errors) {
  const classState = valid === true ? "success" : "danger";
  const divFeedback = document.getElementById("feedback-box");
  divFeedback.innerHTML = "";
  divFeedback.setAttribute("class", `feedback-box ${classState}`);

  if (!isStrNilOrEmpty(msg)) {
    const pElem = createElem("p", { text: msg });
    divFeedback.appendChild(pElem);
  }
  if (!valid && !isArrNilOrEmpty(errors)) {
    let liElems = [];
    for (let i = 0; i < errors.length; i++) {
      const err = errors[i];
      const liElem = createElem("li", { text: err });
      liElems.push(liElem);
    }
    const ulElem = createElem("ul", { child: liElems });
    divFeedback.appendChild(ulElem);
  }
}

function enviarDados() {
  const inputNome = document.getElementById("nome");
  const inputEmail = document.getElementById("email");
  const inputCpf = document.getElementById("cpf");
  const inputTelefone = document.getElementById("telefone");
  const inputDataNascimento = document.getElementById("data-nascimento");
  const inputEndereco = document.getElementById("endereco");
  const inputCep = document.getElementById("cep");
  const inputCidade = document.getElementById("cidade");
  const inputEstado = document.getElementById("estado");

  errors = [];
  const isNomeValid = !isStrNilOrEmpty(inputNome.value);
  const isEmailValid =
    !isStrNilOrEmpty(inputEmail.value) &&
    validateRegexInText(EMAIL_REGEX, inputEmail.value);
  const isCpfValid =
    !isStrNilOrEmpty(inputCpf.value) &&
    validateRegexInText(CPF_REGEX, inputCpf.value);

  const isTelefoneValid = isStrNilOrEmpty(inputTelefone.value)
    ? true
    : validateRegexInText(TELEFONE_REGEX, inputTelefone.value);

  const isDataNascimentoValid =
    !isStrNilOrEmpty(inputDataNascimento.value) &&
    validateDataNascimento(inputDataNascimento.value);

  const isCepValid = isStrNilOrEmpty(inputCep.value)
    ? true
    : validateRegexInText(CEP_REGEX, inputCep.value);

  const isEstadoValid = isStrNilOrEmpty(inputEstado.value)
    ? true
    : inputEstado.value.length == 2;

  if (!isNomeValid) {
    errors.push('O campo "Nome" é obrigatório.');
  }
  if (!isEmailValid) {
    errors.push(
      'O campo "Email" é obrigatório e precisa estar no formato: xxxx@xxxxx.xxx'
    );
  }
  if (!isCpfValid) {
    errors.push(
      'O campo "CPF" é obrigatório e precisa estar no formato: 000.000.000-00'
    );
  }
  if (!isTelefoneValid) {
    errors.push(
      'O campo "Telefone" é opcional, mas precisa estar no formato: (00)00000-0000'
    );
  }
  if (!isDataNascimentoValid) {
    errors.push(
      'O campo "Data de Nascimento" é obrigatório e precisa ser maior do que 18 anos'
    );
  }
  if (!isCepValid) {
    errors.push(
      'O campo "CEP" é opcional, mas precisa estar no formato: 00000-000'
    );
  }
  if (!isEstadoValid) {
    errors.push(
      'O campo "Estado" é opcional, mas precisa estar no formato: XX'
    );
  }

  console.log("isNomeValid", isNomeValid);
  console.log("isEmailValid", isEmailValid);
  console.log("isCpfValid", isCpfValid);
  console.log("isDataNascimentoValid", isDataNascimentoValid);
  console.log("isCepValid", isCepValid);
  console.log("isEstadoValid", isEstadoValid);

  if (
    isNomeValid &&
    isEmailValid &&
    isCpfValid &&
    isTelefoneValid &&
    isDataNascimentoValid &&
    isCepValid &&
    isEstadoValid
  ) {
    showFeedback(true, "Dados enviados com sucesso!", []);
  } else {
    showFeedback(false, "Erro ao enviar dados:", errors);
  }
}

function validateDataNascimento(dataStr) {
  const now = new Date();
  const dt = new Date(`${dataStr}T00:00:00`);
  const todayYear = now.getFullYear();
  const targetYear = todayYear - 18;
  const maxDate = new Date(targetYear, now.getMonth(), now.getDate(), 0, 0, 0);
  return dt.getTime() < maxDate.getTime();
}
