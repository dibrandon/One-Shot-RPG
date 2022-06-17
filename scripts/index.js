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

let sieteD6 = usar(7,6)


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

let imgCampVol = new Image();
imgCampVol.src = "./src/campamento.png"

let imgTaberna = new Image();
imgTaberna.src = "./src/taberna.png"

let imgCampamentoInteraccion= new Image();
imgCampamentoInteraccion.src = "./src/campamentoInteractuar.png"

let imgWin = new Image();
imgWin.src = "./src/win.png"

let gameOver = new Image()
gameOver.src = "./src/gameOverCanvas.png"

var pjPrincipal = new Ficha("gil", str, con, tam, int, per, dex, apa, 50, 400, 30, 30, imgPJ, ctx)
var guardias = new Ficha("guardias", 24, 30, 16, 17, 23, 36, 21, 130, 0, 101, 53, imgCampamento, ctx)

const campamentoNecro = new Location("Necro", 130, 0, 101, 53, imgCampamento, ctx, imgagenInte, deadByGuards)
const entradaCastillo = new Location("El Paso", 275, 82, 75, 70, imgGuardias, ctx, imgGuardias, deadByGuards)
const campamentoVol = new Location("Vols", 0, 80, 100, 100, imgCampVol, ctx, 
imgagenInte, deadByGuards)
const taberna = new Location("Esperanza Lunar", 40, 224, 90, 99, imgTaberna, ctx,
imgagenInte, deadByGuards)



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
    if (e.key === "ArrowDown" && pjPrincipal.y < 430) {
        pjPrincipal.y += 30;
    }

    ctx.drawImage(imgFondo, 0, 0)
    pjPrincipal.invocarPJ();
    rolInst.innerHTML = `<p>Entra al Castillo antes del anochecer  <br>
    Busca monedas para sobornar a los guardias`
    //mostrarChapines.innerHTML = `<p>Chapines: ${verChapines}</p>`


    if (campamentoNecro.detectarColision(pjPrincipal)) {
        console.log("entra el detectar desde campamento NECRO");
        ctx.drawImage(imgagenInte, 0,0, 350, 460);
    }  
    if (entradaCastillo.detectarColision(pjPrincipal)) {
        alert("Alto ahi! No puedes pasar, vete!")
        entradaCastillo.gameOverDieByLocation();
        console.log("entra el detectar desde el campamento");
        if (pjPrincipal.moneyBag > 100){
            ctx.drawImage(imgWin, 0,0,350,460)
        }else{ctx.drawImage(gameOver, 0,0,350,460)}
    }
    if (campamentoVol.detectarColision(pjPrincipal)){
        ctx.drawImage(imgCampamentoInteraccion, 0,0,350,460)
        
        console.log("entra desde campamento vol")
    }
    if (taberna.detectarColision(pjPrincipal)) {
        ctx.drawImage(imgTaberna, 0, 0, 350, 460)
        btnCojer.addEventListener("click", textTabern)
        console.log("entra desde la taberna")
    }
}


let domCap = document.getElementById("pad")
let btnCojer = document.getElementById("rBtn")
let rolInst = document.getElementById("rol")
let showCombatSkill = document.getElementById("skill")
let mostrarChapines = document.getElementById("monedas")
let verChapines = pjPrincipal.moneyBag




//mostrarChapines.innerHTML = `Chapines: ${verChapines}`


const textTabern = () => {
    if((usar(8,6)< pjPrincipal.comunication) && (pjPrincipal.detectarColision(taberna)|| pjPrincipal.detectarColision(campamentoNecro) || pjPrincipal.detectarColision(campamentoVol))) {
        rolInst.innerHTML = `<p>Encuentras algo similiar a una moneda, digamosle chapin.</p>`
       pjPrincipal.moneyBag += 1
       console.log(pjPrincipal.moneyBag) 
       mostrarChapines.innerHTML = `<li><a href="#">${verChapines}</a></li>`
    }else{rolInst.innerHTML = `<p>Definitivamente aqui no hay nada`}
} 

const chapitas = () => { mostrarChapines.innerHTML = `<li><a href="#">${verChapines}</a></li>`}

const combatSkill = () => {showCombatSkill.innerHTML = `<li>Habilidad Combate: ${pjPrincipal.combatSkill} Chapines: ${verChapines}</a></li>`}
//mostrarChapines.innerHTML = `Chapines: ${verChapines}`


// texto();

const escapar = () => { 
    if (usar(5,6)< pjPrincipal.comunication){
    pjPrincipal.borrar();
    pjPrincipal.y = 130; 
    pjPrincipal.x = 130;
    ctx.drawImage(imgFondo, 0, 0)
    pjPrincipal.invocarPJ()
    }else{console.log("game over")}
}

const finalNoche = () => {
    ctx.drawImage(gameOver, 0,0,350,460)
}
const startGame = () => {
    ctx.drawImage(imgFondo, 0, 0)
    pjPrincipal.invocarPJ();
    combatSkill()
    //chapitas()
    
    console.log(pjPrincipal.comunication)
    console.log(pjPrincipal.combatSkill)
    console.log(pjPrincipal.sigilo)
    console.log(guardias.comunication)
    console.log(guardias.combatSkill)

}

// domCap.innerHTML += `<li><a href="#">${str}</a></li>`
// mostrarChapines.addEventListener("click,", showChapines);
const gameOverCounter = setTimeout(finalNoche, 60000);
mostrarChapines.addEventListener("click", chapitas)
domCap.addEventListener("click", escapar);
window.addEventListener("load", startGame);
window.addEventListener("keydown", moverPJ);