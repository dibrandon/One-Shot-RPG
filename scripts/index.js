// Necesario globlamente
const canvas = document.getElementById('canvas-box');
const ctx = canvas.getContext('2d');
let dado = new dados()

// stats de personajes al azar con el objeto dado y su metodo de usar dados
let str = dado.usar(3, 6)
let con = dado.usar(3, 6)
let tam = dado.usar(2, 6) + 6
let int = dado.usar(2, 6) + 6
let per = dado.usar(3, 6)
let dex = dado.usar(3, 6)
let apa = dado.usar(3, 6)


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