import { MusicalEquip } from "./musicalEquip.js";

export class MusicalInstrument extends MusicalEquip {
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
    if (this.customer !== null) {
      console.log(
        `Инструмент ${instrument} возвращен клиентом ${this.customer} `
      );
      this.isFree = true;
      this.customer = null;
    } else {
      console.log(`Нечего возвращать`);
    }
  }
  play() {
    this.needTune = true;
    console.log("Клиент занимается на инструменте.");
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
