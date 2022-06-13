// Necesario globlamente
const canvas = document.getElementById('canvas-box');
const ctx = canvas.getContext('2d');
let dadosD6 = new dados()


let imgFondo = new Image();
imgFondo.src = "./src/fondo.png"

let imgPJ = new Image();
imgPJ.src ="./src/PelotaGoomba.png"

const coche = new Ficha(250, 0, 60, 60, cocheImagen, ctx);

const startGame = () => {

    ctx.drawImage(imgFondo, 0, 0)
    ctx.drawImage(imgPJ, 60, 500)
}



window.addEventListener("load", startGame );