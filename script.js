"use strict";
class Lavoratore {
    constructor(type, codredd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.type = type;
        this.codredd = codredd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
        console.log(`Reddito Netto di ${this.type}`, this.getRedditoAnnuoNetto);
    }
    get getUtileTasse() {
        return (this.codredd * this.redditoAnnuoLordo) / 100;
    }
    get getTasseInps() {
        return (this.getUtileTasse * this.tasseInps) / 100;
    }
    get getTasseIrpef() {
        return (this.getUtileTasse * this.tasseIrpef) / 100;
    }
    get getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - (this.getTasseInps + this.getTasseIrpef);
    }
}
class Commerciante extends Lavoratore {
    constructor() {
        super("Commerciante", 37, 25000, 28, 25);
    }
}
class Ambulante extends Lavoratore {
    constructor() {
        super("Ambulante", 54, 10000, 24, 28);
    }
}
class Edilizia extends Lavoratore {
    constructor() {
        super("Edilizia", 88, 100000, 29, 39);
    }
}
class Alberto extends Lavoratore {
    constructor() {
        super("Alberto  il furbertto", 0, 1000000, 0, 0);
        console.log("Tasse INPS di Alberto", this.getTasseInps);
        console.log("Tasse IRPEF di Alberto", this.tasseIrpef);
        console.log("Alberto il furbetto evade il fisco");
    }
}
let commerciante = new Commerciante();
let ambulante = new Ambulante();
let edile = new Edilizia();
let alberto = new Alberto();
