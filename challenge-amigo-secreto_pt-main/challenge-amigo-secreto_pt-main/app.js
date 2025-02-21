//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");

    let nome = inputAmigo.value.trim(); // Remove espaços extras

    if (nome !== "") {
        amigos.push(nome);

        // Atualiza a lista na tela
        atualizarListaAmigos();

        // Limpa o campo de entrada
        inputAmigo.value = "";
        inputAmigo.focus();
    } else {
        alert("Digite um nome antes de adicionar!");
    }
}

// Permite adicionar um nome ao pressionar "Enter" no campo de texto
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        adicionarAmigo(); // Chama a função que adiciona o nome
    }
});

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de adicionar os itens

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>O seu amigo secreto é: <strong>${sorteado}</strong></p>`;
}

function limparLista() {
    amigos = []; // Esvazia a lista
    document.getElementById("listaAmigos").innerHTML = ""; // Remove os itens da tela
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado
}
