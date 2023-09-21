function confirmName() {
    const playerName = document.getElementById("playerName").value;
    if (playerName.trim() !== "") {
        // Armazena o nome do jogador na sessão
        sessionStorage.setItem("playerName", playerName);

        // Redireciona para a tela de confirmação
        window.location.href = "confirm.html";
    } else {
        alert("Por favor, insira um nome válido.");
    }
}
