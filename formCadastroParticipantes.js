const formCadastro = document.getElementById("formCadastroParticipantes");

formCadastro.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nomeParticipante = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value;
    // Verifica se o sexo foi selecionado
    const aceito = document.getElementById("aceito").checked;

    // Verifica se o participante aceitou os regulamentos
    if (!aceito) {
        alert("Você deve aceitar os regulamentos para se cadastrar.");
        return;
    }

    const listaParticipantes = document.getElementById("listaParticipantes");
    const novoParticipante = document.createElement('li');
    novoParticipante.innerText = `${nomeParticipante} -- ${idade} anos -- Sexo: ${sexo}`;

    // Adiciona o novo item na lista
    listaParticipantes.appendChild(novoParticipante);
    formCadastro.reset();
});