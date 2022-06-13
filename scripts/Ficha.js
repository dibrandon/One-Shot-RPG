// hoja/plantilla de culaquier personaje en el juego.
class Ficha {
    constructor(xName, str, con, tam, int, per, dex, apa, x, y, ancho, alto, imagen, ctx) {
        this.xName = xName;
        this.hp = 10;
        this.mp = 10;
        this.pf = 10;
        this.str = str;
        this.con = con;
        this.tam = tam;
        this.int = int;
        this.per = per;
        this.dex = dex;
        this.apa = apa;
        this.specie = "";
        this.religion = "";
        this.bag = [];
        this.moneyBag = 0;
        this.armor = 0;
        this.weapon = 0;
        this.spells = 0;
        this.combatSkill = int + dex + (str / 2);
        this.comunication = int + ((per + apa) / 2);
        this.intimidate = 5;
        this.fluentSpeach = 5;
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.imagen = imagen;
        this.ctx = ctx;

    }
    
    detectarColision = (otroObjeto) => {
        if (otroObjeto.y + otroObjeto.alto < this.y) {
          return "";
        }
        if (otroObjeto.x + otroObjeto.ancho < this.x) {
          return "";
        }
        if (this.y + this.alto < otroObjeto.y) {
          return "";
        }
        if (this.x + this.ancho < otroObjeto.x) {
          return "";
        }
    
        if (otroObjeto.y + otroObjeto.alto === this.y) {
          return "colision-superior";
        }
    
        if (otroObjeto.x + otroObjeto.ancho === this.x) {
          return "colision-izquierda";
        }
    
        if (otroObjeto.x === this.x + this.ancho) {
          return "colision-derecha";
        }
    
        if (this.y + this.alto === otroObjeto.y) {
          //Por probar
          return "colision-inferior";
        }
    
        return "colision";
      };
      
invocarPJ() {
  ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
}

borrar() {
  ctx.clearRect(this.x, this.y, this.ancho, this.alto);
}
    //equipar Arma
    equipWeapon(newWeapon){
         this.weapon = newWeapon
    }

    //agarrar item
    takeItem(newItem) {
        this.bag.push(newItem)
    }


    incrementIntimidate(newItem) {
        this.intimidate = this.intimidate + newItem;
    }
    decrementIntimidate(newItem) {
        this.intimidate = this.intimidate - newItem;
    }


    incrementFluentSpeach(newItem) {
        this.fluentSpeach = this.fluentSpeach + newItem;
    }

    decrementFluentSpeach(newItem) {
        this.fluentSpeach = this.fluentSpeach - newItem;
    }
    //Intimidar
    intimidate() {
        return this.comunication + this.intimidate;
    }

    //Habla fluida (convencer)
    fluentSpeach() {
        return this.comunication + this.fluentSpeach;
    }
    //daño del arma
    weaponDamage() {
        return this.weapon;
    }

    //recibir daño
    receiveDamage(num) {
        this.hp -= num;
        if (this.hp > 0) {
            return `${this.newName} has received ${num} points of damage`;
        } else {
            return `${this.newName} has died in act of combat`;
        }
    }
}
