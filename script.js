// Dados temporários para a lista de vagas (simulando um backend)
const vagas = [
    { placa: "ABC1234", proprietario: "João", apartamento: "101", 
      bloco: "A", modelo: "Fiat Uno", cor: "Branco", vaga: "1" },
    { placa: "XYZ5678", proprietario: "Maria", apartamento: "202", 
      bloco: "B", modelo: "VW Gol", cor: "Preto", vaga: "2" },
];

// Função para exibir as vagas na tela de listagem
function listarVagas() {
    const vagasList = document.getElementById("vagas-list");
    vagasList.innerHTML = "";

    vagas.forEach(vaga => {
        const listItem = document.createElement("li");
        listItem.textContent = `Placa: ${vaga.placa}, Proprietário: ${vaga.proprietario}, Apartamento: ${vaga.apartamento}, Bloco: ${vaga.bloco}, Modelo: ${vaga.modelo}, Cor: ${vaga.cor}, Vaga: ${vaga.vaga}`;
        vagasList.appendChild(listItem);
    });
}

// Função para salvar o cadastro de reserva
function salvarCadastro() {
    const placa = document.getElementById("placa").value;
    const proprietario = document.getElementById("proprietario").value;
    const apartamento = document.getElementById("apartamento").value;
    const bloco = document.getElementById("bloco").value;
    const modelo = document.getElementById("modelo").value;
    const cor = document.getElementById("cor").value;
    const vaga = document.getElementById("vaga").value;

    // Adicione validações se necessário

    // Adicione o novo cadastro à lista de vagas
    vagas.push({ placa, proprietario, apartamento, bloco, modelo, cor, vaga });

    // Limpe o formulário
    document.getElementById("cadastro-form").reset();

    // Exiba uma mensagem de confirmação
    alert("Cadastro realizado com sucesso!");

    // Atualize a lista de vagas na tela
    listarVagas();
}

// Event listener para o formulário de cadastro
document.getElementById("cadastro-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio do formulário padrão
    salvarCadastro();
});

// Inicialize a lista de vagas na tela de listagem
listarVagas();