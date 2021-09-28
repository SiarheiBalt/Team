export class MusicalInstruments {
  constructor(color, years, manufacture) {
    this.color = color;
    this.productionYears = years;
    this.manufacture = manufacture;
    this.isFree = true;
    this.customer = null;
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
}

export class Guitar extends MusicalInstruments {
  constructor(color, years, manufacture, numberOfStrings, rentPrice) {
    super(color, years, manufacture);
    this.numberOfStrings = numberOfStrings;
    this.name = 'guitar';
    this.rentPrice = rentPrice;
  }
  tune(engineer) {
    console.log(`настройка гитары`);
  }
}

export class Drums extends MusicalInstruments {
  constructor(color, years, manufacture, numbersOfDrams, rentPrice) {
    super(color, years, manufacture);
    this.numbersOfDrams = numbersOfDrams;
    this.name = 'drums';
    this.rentPrice = rentPrice;
  }
  tune(engineer) {
    console.log('настройка барабанов');
  }
}
