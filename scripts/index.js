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

function usar(cantidadDeDados, carasDelDado){
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
imgPJ.src ="./src/PelotaGoomba.png"


const pjPrincipal = new Ficha("gil", str, con, tam, int, per, dex, apa, 50, 500, 30, 30, imgPJ, ctx)

const startGame = () => {

    ctx.drawImage(imgFondo, 0, 0)
    pjPrincipal.invocarPJ();
    
}

const moverPJ = (e) => {
    pjPrincipal.borrar();
    if (e.key === "ArrowLeft") {
        pjPrincipal.x -= 5;
    }
    if (e.key === "ArrowRight") {
        pjPrincipal.x += 5;
    }
    if (e.key === "ArrowUp") {
        pjPrincipal.y -= 5;
    }
    if (e.key === "ArrowDown") {
        pjPrincipal.y += 5;
    }
    
    ctx.drawImage(imgFondo, 0, 0)
    pjPrincipal.invocarPJ();
  };



window.addEventListener("load", startGame );
window.addEventListener("keydown", moverPJ);