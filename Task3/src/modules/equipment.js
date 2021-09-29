export class MusicalEquip {
  constructor(color, years, manufacture) {
    this.color = color;
    this.productionYears = years;
    this.manufacture = manufacture;
    this.isFree = true;
    this.customer = null;
  }
}

export class MusicalInstrument extends MusicalEquip {
  constructor(color, years, manufacture, rentPrice, name) {
    super(color, years, manufacture);
    this.rentPrice = rentPrice;
    this.name = name;
    this.rentPrice = rentPrice;
    this.needTune = false;
  }

  reserveInstruments(customer) {
    if (this.isFree) {
      this.isFree = false;
      this.customer = customer;
      console.log(
        `Инструмент ${this.name} зарезервирован клиентом - ${customer}`
      );
    } else {
      `Инструмент ${this.name} зарезервирован клиентом ${this.customer}`;
    }
    return this.isFree;
  }
  returnInstrument(instrument) {
    console.log(
      `Инструмент ${instrument} возвращен клиентом ${this.customer} `
    );
    this.isFree = true;
    this.customer = null;
  }
  play() {
    this.needTune = true;
    console.log("Клиент занимается на инструменте.");
  }
  checkTune() {
    if (this.needTune) {
      console.log(`Инструмент ${this.name} нуждается в настройке`);
    } else {
      console.log(`Инструмент настроен.`);
    }
    return this.needTune;
  }
}

export class Guitar extends MusicalInstrument {
  constructor(color, years, manufacture, rentPrice, name, numberOfStrings) {
    super(color, years, manufacture, rentPrice, name);
    this.numberOfStrings = numberOfStrings;
  }

  tune(engineer) {
    console.log(`настройка гитары`);
  }
}

export class Drums extends MusicalInstrument {
  constructor(color, years, manufacture, rentPrice, name, numberOfStrings) {
    super(color, years, manufacture, rentPrice, name);
  }
  tune(engineer) {
    console.log("настройка барабанов");
  }
}
