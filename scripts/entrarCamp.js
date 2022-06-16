const entrarCamp = (e) => {
    //if (campamentoNecro.detectarColision(pjPrincipal)) {
    if (e.key === "Enter" && entradaCastillo.detectarColision(pjPrincipal)) {
        entradaCastillo.gameOverDieByLocation();
        console.log("entra el detectar desde el campamento");

    }

};
