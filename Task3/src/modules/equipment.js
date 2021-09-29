class MusicalEquip {
  constructor(color, years, manufacture) {
    this.color = color;
    this.productionYears = years;
    this.manufacture = manufacture;
    this.isFree = true;
    this.customer = null;
  }
}

class RecordingEquip extends MusicalEquip {
  constructor(color, years, manufacture, name) {
    super(color, years, manufacture);
    this.isOn = false;
    this.name = name;
  }
  turnOn() {
    this.isOn = true;
    console.log(`${this.name} включен.`);
  }
  turnOf() {
    this.isOn = false;
    console.log(`${this.name} выключен.`);
  }
}

class Amp extends RecordingEquip {}

class Computer extends RecordingEquip {}

class MusicalInstrument extends MusicalEquip {
  constructor(color, years, manufacture, rentPrice, name) {
    super(color, years, manufacture);
    this.rentPrice = rentPrice;
    this.name = name;
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
    console.log('Клиент занимается на инструменте.');
  }
  checkTune() {
    if (this.needTune) {
      console.log(`Инструмент ${this.name} нуждается в настройке`);
    } else {
      console.log(`Инструмент в настройке не нуждается.`);
    }
    return this.needTune;
  }
  tunning() {
    console.log(`Инструмент настроен`);
    this.needTune = false;
  }
}

class Guitar extends MusicalInstrument {
  constructor(color, years, manufacture, rentPrice, name, numberOfStrings) {
    super(color, years, manufacture, rentPrice, name);
    this.numberOfStrings = numberOfStrings;
  }
}

class Drums extends MusicalInstrument {
  constructor(color, years, manufacture, rentPrice, name, numberOfDrums) {
    super(color, years, manufacture, rentPrice, name);
    this.numberOfDrums = numberOfDrums;
  }
}

export const guitar = new Guitar('black', 2000, 'Japan', 15, 'guitar', 6);
export const drums = new Drums('White', 2013, 'China', 30, 'drums', 5);
export const computer = new Computer('white', 'Integrall', 2019, 'компьютер');
export const amp = new Amp('black', 'Marshall', 1995, 'усилитель');
