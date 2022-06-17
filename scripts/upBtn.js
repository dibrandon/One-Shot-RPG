const upBtn = document.getElementById("upBtn");
const upPad = () => {
    pjPrincipal.borrar();
    if (pjPrincipal.y > 0) {
        pjPrincipal.y -= 10;
    }
    ctx.drawImage(imgFondo, 0, 0);
    pjPrincipal.invocarPJ();
};
upBtn, addEventListener("click", upPad);
