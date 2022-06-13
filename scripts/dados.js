class dados{
    constructor(){
        this.guardarTiradas = 0
    }

usar(cantidadDeDados, carasDelDado) {
    let result = 0;
    for (i = 1; i <= cantidadDeDados; i++) {

        let dice = parseInt(carasDelDado * Math.random() + 1);
        result = result + dice;


    }
    this.guardarTiradas = result
    return result;


}
tiradaAnterior(){
    return this.guardarTiradas
}

}


