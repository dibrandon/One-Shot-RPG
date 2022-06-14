let virtualPad = document.getElementById("upBtn").addEventListener("ontouchstart", moverPJpad);
const moverPJpad = (e) => {
    if (pjPrincipal.y > 0) {
        pjPrincipal.y -= 10;
        console.log("pad");
        if (pjPrincipal.detectarColision(campamentoNecro)) {
            alert("stop interaccion");
        }
    }
};
