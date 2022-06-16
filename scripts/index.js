// Necesario globlamente
const canvas = document.getElementById('canvas-box');
const ctx = canvas.getContext('2d');

function usar(cantidadDeDados, carasDelDado) {
    let result = 0;
    for (i = 1; i <= cantidadDeDados; i++) {

        let dice = parseInt(carasDelDado * Math.random() + 1);
        result = result + dice;


    }
    return result;
}


function mapa() {
    ctx.drawImage(imgFondo, 20, 20)
}


let str = usar(3, 6)
let con = usar(3, 6)
let tam = usar(2, 6) + 6
let int = usar(2, 6) + 6
let per = usar(3, 6)
let dex = usar(3, 6)
let apa = usar(3, 6)

let imgFondo = new Image();
imgFondo.src = "./src/fondo.png"

let imgPJ = new Image();
imgPJ.src = "./src/PelotaGoomba.png"

let imgCampamento = new Image();
imgCampamento.src = "./src/necroRuinas.png"

let imgagenInte = new Image();
imgagenInte.src = "./src/interaccion.png"

let imgGuardias = new Image();
imgGuardias.src = "./src/guardias.png"

let deadByGuards = new Image();
deadByGuards.src = "./src/deadByGuards.png"


var pjPrincipal = new Ficha("gil", str, con, tam, int, per, dex, apa, 50, 500, 30, 30, imgPJ, ctx)
var guardias = new Ficha("guardias", 24, 30, 16, 17, 23, 36, 21, 130, 0, 101, 53, imgCampamento, ctx)

const campamentoNecro = new Location("Necro", 130, 0, 101, 53, imgCampamento, ctx, imgagenInte, deadByGuards)
const entradaCastillo = new Location("El Paso", 275, 82, 75, 70, imgGuardias, ctx, imgGuardias, deadByGuards)

const startGame = () => {
    ctx.drawImage(imgFondo, 0, 0)
    pjPrincipal.invocarPJ();
    console.log(pjPrincipal.comunication)
    console.log(pjPrincipal.combatSkill)
    console.log(guardias.comunication)
    console.log(guardias.combatSkill)

}
const moverPJ = (e) => {
    pjPrincipal.borrar();

    if (e.key === "ArrowLeft" && pjPrincipal.x > 0) {
        pjPrincipal.x -= 30;
    }
    if (e.key === "ArrowRight" && pjPrincipal.x < 320) {
        pjPrincipal.x += 30;
    }
    if (e.key === "ArrowUp" && pjPrincipal.y > 0) {
        pjPrincipal.y -= 10;
    }
    if (e.key === "ArrowDown" && pjPrincipal.y < 550) {
        pjPrincipal.y += 30;
    }

    ctx.drawImage(imgFondo, 0, 0)
    pjPrincipal.invocarPJ();



    if (campamentoNecro.detectarColision(pjPrincipal)) {
        console.log("entra el detectar desde campamento NECRO");
        ctx.drawImage(imgagenInte, 50, 600);
        mapa()

        if (e.key === "Escape" && pjPrincipal.combatSkill > guardias.combatSkill) {
            console.log("ganaPJ")
        } else {
            console.log("gana Guardia")
        }
    }
    if (e.key === "Enter" && entradaCastillo.detectarColision(pjPrincipal)) {
        alert("Alto ahi! no puedes pasar")
        entradaCastillo.gameOverDieByLocation();
        console.log("entra el detectar desde el campamento");

    }
}

let domCap = document.getElementById("pad")
const texto = () => {let word = domCap.innerHTML += `<li><a href="#">${str}</a></li>`}
let escuchar = domCap.addEventListener("click", texto)














//window.addEventListener("load", virtualPad)
//window.addEventListener("keydown", innteractuarNecro)
//window.addEventListener("keydown", eventos);
window.addEventListener("load", startGame);
window.addEventListener("keydown", moverPJ);