export class MusicalInstruments {
  constructor(color, years, manufacture) {
    this.color = color;
    this.productionYears = years;
    this.manufacture = manufacture;
    this.isReserved = false;
    this.customer = null;
  }
}

export class Guitar extends MusicalInstruments {
  constructor(color, years, manufacture, numberOfStrings, rentPrice) {
    super(color, years, manufacture);
    this.numberOfStrings = numberOfStrings;
    this.name = "guitar";
    this.rentPrice = rentPrice;
  }
  reserveInstruments(customer) {
    this.isReserved = true;
    this.customer = customer;
    console.log(
      `Инструмент ${
        this.name
      } зарезервирован клиентом - ${customer.getFullName()}`
    );
  }
  tune(engineer) {
    console.log(`настройка гитары`);
  }
}

export class Drums extends MusicalInstruments {
  constructor(color, years, manufacture, numbersOfDrams, rentPrice) {
    super(color, years, manufacture);
    this.numbersOfDrams = numbersOfDrams;
    this.name = "drums";
    this.rentPrice = rentPrice;
  }
  reserveInstruments(customer) {
    this.isReserved = true;
    this.customer = customer;
  }
  tune(engineer) {
    console.log("настройка барабанов");
  }
}
