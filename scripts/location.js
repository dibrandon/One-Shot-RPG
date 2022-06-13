class Location {
    constructor (xName, x, y, ancho, alto, imagen, ctx){
        this.name = xName
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.imagen = imagen;
        this.ctx = ctx; 
    }
    construir() {
        ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
      }
      
      borrar() {
        ctx.clearRect(this.x, this.y, this.ancho, this.alto);
      }
}