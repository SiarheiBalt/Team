import MusicalEquip from "./musicalEquip.js";

export default class MusicalInstrument extends MusicalEquip {
  constructor(color, years, manufacture, rentPrice) {
    super(color, years, manufacture);
    this.rentPrice = rentPrice;
    this.needTune = false;
  }

  reserveInstruments(customer) {
    if (this.isFree) {
      this.isFree = false;
      this.customer = customer;
      this.logRecord.addLog(
        `Инструмент ${this.name} зарезервирован клиентом - ${customer}`
      );
    }
    return this.isFree;
  }
  returnInstrument(instrument) {
    if (this.customer !== null) {
      this.logRecord.addLog(
        `Инструмент ${instrument} возвращен клиентом ${this.customer} `
      );
      this.isFree = true;
      this.customer = null;
    } else {
      this.logRecord.addLog(`Нечего возвращать`);
    }
  }
  play() {
    this.needTune = true;
    this.logRecord.addLog("Клиент занимается на инструменте.");
  }
  checkTune() {
    if (this.needTune) {
      this.logRecord.addLog(`Инструмент ${this.name} нуждается в настройке`);
    } else {
      this.logRecord.addLog(`Инструмент в настройке не нуждается.`);
    }
    return this.needTune;
  }
  tunning() {
    this.logRecord.addLog(`Инструмент настроен`);
    this.needTune = false;
  }
}
