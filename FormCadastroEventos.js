const formCadastro=document.getElementById("formCadastroEventos")
formCadastro.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    const nomeEvento = document.getElementById("NomeEvento").value;
    const dataEvento = document.getElementById("DataEvento").value;
    const Modalidade=document.getElementById("Modalidade").value;
    const outros= document.getElementById("outros").value;
    const localEvento= document.getElementById("LocalEvento").value;
    const listaEventos = document.getElementById("listaEventos");
    const checkbox = document.getElementById("Evento").checked;
    const novoEvento=document.createElement ('li');
    novoEvento.innerText= `${nomeEvento} -- (${dataEvento}) -- ${Modalidade} -- ${outros} -- ${localEvento} -- ${checkbox ? "Sim" : "não"}`;
    //Adiciona o novo item na lista
    listaEventos.appendChild(novoEvento);
    formCadastro.reset();
});