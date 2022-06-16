// items 

class Potion {
    constructor (restoration){
        this.restoration = restoration
    }
     usePot(){
        return this.restoration
    }
}
class RaiseIntimidate {
    constructor(raiseIntimidate){
        this.raiseIntimidate = raiseIntimidate
    }
}

class Weapon {
    constructor(damage, car){
        this.damage = damage;
        this.car = car;
    }
    damage(){
        return this.damage
    }
    car(){
        return this.car
    }
}

class Armor{
    constructor(armor, car){
        this.armor = armor;
        this.car = car;
    }
    armor(){
        return this.armor
    }
    car(){
        return this.car
    }

}