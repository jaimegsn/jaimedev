// Defina o e-mail do destinatário em uma constante
const recipientEmail = "jaime.jgsn2@gmail.com";

// Selecione o formulário
const formSent = document.querySelector("[data-form]");

// Adicione um evento de envio ao formulário
formSent.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Obtenha os valores dos campos do formulário
  const fullname = formSent.querySelector("input[name='fullname']").value;
  const message = formSent.querySelector("textarea[name='message']").value;

  // Crie o link mailto com a mensagem já preenchida
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    fullname
  )}&body=${encodeURIComponent(message)}`;

  //console.log("teste: " + mailtoLink);

  // Defina o atributo action do formulário como o link mailto
  formSent.action = mailtoLink;

  // Submeta o formulário (o que redireciona para o cliente de e-mail)
  formSent.submit();
});
