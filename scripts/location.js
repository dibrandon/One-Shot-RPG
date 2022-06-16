class Location {
    constructor (xName, x, y, ancho, alto, imagen, ctx, imgagenInte, deadByGuards){
        this.name = xName
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.imagen = imagen;
        this.imgagenInte = imgagenInte
        this.deadByGuards = deadByGuards
        this.ctx = ctx; 
    }
    construir() {
        ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
      }
      
      borrar() {
        ctx.clearRect(this.x, this.y, this.ancho, this.alto);
      }
      interactuar() {
        ctx.drawImage(this.imgagenInte, this.x, this.y, this.ancho, this.alto);
      }

      gameOverDieByLocation() {
          this.ctx.drawImage(this.deadByGuards, 0, 0, 300, 300)
      }

      detectarColision = (otroObjeto) => {
        if (otroObjeto.y + otroObjeto.alto < this.y) {
//            console.log("entra por Ficha")
          return "";
        }
        if (otroObjeto.x + otroObjeto.ancho < this.x) {
  //          console.log("entra por Ficha")
          return "";
          
        }
        if (this.y + this.alto < otroObjeto.y) {
    //        console.log("entra por Ficha")
          return "";
        }
        if (this.x + this.ancho < otroObjeto.x) {
    //        console.log("entra por Ficha")
          return "";
        }
    
        if (otroObjeto.y + otroObjeto.alto === this.y) {
   //         console.log("entra por Ficha")
          return "colision-superior";
        }
    
        if (otroObjeto.x + otroObjeto.ancho === this.x) {
   //         console.log("entra por Ficha")
          return "colision-izquierda";
        }
    
        if (otroObjeto.x === this.x + this.ancho) {
//            console.log("entra por Ficha")
          return "colision-derecha";
        }
    
        if (this.y + this.alto === otroObjeto.y) {
          
            return "colision-inferior";
        }
        return "colision";
      };
}