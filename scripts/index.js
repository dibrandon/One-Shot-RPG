// Necesario globlamente
const canvas = document.getElementById('canvas-box');
const ctx = canvas.getContext('2d');
//let dado = new Dados()

// stats de personajes al azar con el objeto dado y su metodo de usar dados
/*
let str = dado.usar(3, 6)
let con = dado.usar(3, 6)
let tam = dado.usar(2, 6) + 6
let int = dado.usar(2, 6) + 6
let per = dado.usar(3, 6)
let dex = dado.usar(3, 6)
let apa = dado.usar(3, 6)
*/



function usar(cantidadDeDados, carasDelDado) {
    let result = 0;
    for (i = 1; i <= cantidadDeDados; i++) {

        let dice = parseInt(carasDelDado * Math.random() + 1);
        result = result + dice;


    }
    //    this.guardarTiradas = result
    return result;
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

const pjPrincipal = new Ficha("gil", str, con, tam, int, per, dex, apa, 50, 500, 30, 30, imgPJ, ctx)

const campamentoNecro = new Location("Necro", 130, 0, 101, 53, imgCampamento, ctx, imgagenInte)

const startGame = () => {

    ctx.drawImage(imgFondo, 0, 0)
    campamentoNecro.construir()
    pjPrincipal.invocarPJ();
    // ctx.drawImage(imgPJ, 50, 600)
    // entrarCamp()
    // moverPJ()
    // setInterval(gameOver,20000)

}

const eventoRPG = () => {
    campamentoNecro.interactuar()
}

const entrarCamp = () => {
    if (campamentoNecro.detectarColision(pjPrincipal)) {
        console.log("entra el detectar desde el campamento")
        //        ctx.drawImage(imgFondo, 0, 0)
        //        pjPrincipal.invocarPJ();
        //        campamentoNecro.interactuar()
    }

}

const moverPJ = (e) => {
    pjPrincipal.borrar();
    if (e.key === "ArrowLeft" && pjPrincipal.x > 0) {
        pjPrincipal.x -= 10;
        // if (pjPrincipal.detectarColision(campamentoNecro)){

        // }
    }
    if (e.key === "ArrowRight" && pjPrincipal.x < 320) {
        pjPrincipal.x += 10;
        // if (pjPrincipal.detectarColision(campamentoNecro)){

        // }
    }
    if (e.key === "ArrowUp" && pjPrincipal.y > 0) {
        pjPrincipal.y -= 10;
    }


    if (e.key === "ArrowDown" && pjPrincipal.y < 550) {
        pjPrincipal.y += 10;
        // if (pjPrincipal.detectarColision(campamentoNecro)){

        // }
    }
    ctx.drawImage(imgFondo, 0, 0)
    pjPrincipal.invocarPJ();
    ctx.drawImage(imgPJ, 50, 600)

    if (pjPrincipal.detectarColision(campamentoNecro)) {
        console.log("Entra el detectar desde el PJ")
        eventoRPG();
  ctx.drawImage(imgagenInte, 50, 600)
    }
}

//};

//window.addEventListener("load", virtualPad)
window.addEventListener("keydown", entrarCamp)
window.addEventListener("load", startGame);
window.addEventListener("keydown", moverPJ);