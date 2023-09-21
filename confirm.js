// Recupera o nome do jogador da sessão
const playerName = sessionStorage.getItem("playerName");

// Exibe o nome do jogador na tela de confirmação
const playerNameDisplay = document.getElementById("playerNameDisplay");
playerNameDisplay.textContent = "Nome: " + playerName;
