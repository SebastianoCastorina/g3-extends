abstract class Lavoratore {
  constructor(
    public type: string,
    public codredd: number,
    public redditoAnnuoLordo: number,
    public tasseInps: number,
    public tasseIrpef: number
  ) {
    console.log(`Reddito Netto di ${this.type}`, this.getRedditoAnnuoNetto);
  }

  get getUtileTasse(): number {
    return (this.codredd * this.redditoAnnuoLordo) / 100;
  }

  get getTasseInps(): number {
    return (this.getUtileTasse * this.tasseInps) / 100;
  }

  get getTasseIrpef(): number {
    return (this.getUtileTasse * this.tasseIrpef) / 100;
  }

  get getRedditoAnnuoNetto(): number {
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
