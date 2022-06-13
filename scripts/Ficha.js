
// stats declarados con la funcion de llamar dados
let str = dados(3, 6)
let con = dados(3, 6)
let tam = dados(2, 6) + 6
let int = dados(2, 6) + 6
let per = dados(3, 6)
let dex = dados(3, 6)
let apa = dados(3, 6)

console.log( str, con, tam, int, per, dex, apa)

// it work
class Ficha {
    constructor(xName, str, con, tam, int, per, dex, apa) {
        this.xName = xName;
        this.hp = hp;
        this.mp = mp;
        this.pf = pf;
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
