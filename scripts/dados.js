function dados(cantidadDeDados, carasDelDado) {
    let result = 0;
    for (i = 1; i <= cantidadDeDados; i++) {

        let dice = parseInt(carasDelDado * Math.random() + 1);
        result = result + dice;


    }

    return result;


}
console.log(dados(3, 6) + 6);
console.log(dados(3, 6));
console.log(dados(10, 6));
// it works 