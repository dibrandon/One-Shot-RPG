// items 

class PotionHP {
    constructor (hpRestoration){
        this.hpRestoration = hpRestoration
    }
    hpPotion(){
        return this.hpRestoration
    }
}

class PotionMP {
    constructor (mpRestoration){
        this.mpRestoration = mpRestoration
    }
    mpPotion(){
        return this.mpRestoration
    } 
}

class PotionPF {
    constructor(pfRestoration){
        this.pfRestoration = pfRestoration
    }
    pfPotion(){
        return this.pfRestoration
    }
}

class raiseIntimidate {
    constructor(raiseIntimidate){
        this.raiseIntimidate = raiseIntimidate
    }
}

class smallWeapons {
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

class normalWeapon {
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