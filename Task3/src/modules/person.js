class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
export class Customer extends Person {
  constructor(firstName, lastName, cash) {
    super(firstName, lastName);
    this.cash = cash;
  }
  takeCash(cost) {
    if (this.cash - cost < 0) {
      console.log("Недостаточно средств");
      return false;
    } else {
      this.cash -= cost;
      console.log(
        `Клиент ${this.getFullName()} оплатил услугу в размере ${cost}р.`
      );
      return true;
    }
  }
  getCash() {
    return this.cash;
  }
}
export class StudioWorker extends Person {
  constructor(firstName, lastName, speciality) {
    super(firstName, lastName);
    this.speciality = speciality;
    this.isStudioWorker = true;
  }

  work() {
    console.log(`Работник студии начинает работать.`);
  }
}
export class Worker extends StudioWorker {
  roomCleaning() {
    console.log(`${this.speciality} ${this.getFullName()} убрал в комнате.`);
  }
}
export class Administrator extends StudioWorker {
  roomRent() {
    console.log(
      `${
        this.speciality
      } ${this.getFullName()} предоставил(а) в аренду комнату для репетиции.`
    );
  }
  equipRent(equip) {
    console.log(`${this.speciality} выдал ${equip} клиенту.`);
  }
}
export class SoundEngineer extends StudioWorker {
  checkInstrument(instrument) {
    console.log(`Инженер проверяет инструмент ${instrument}`);
  }
  tuningInstruments(instrument) {
    console.log(`Инженер настраивает инструмент ${instrument}`);
  }
  turnOnEquip(equip) {
    console.log(`Инженер включил ${equip}.`);
  }
  turnOfEquip(equip) {
    console.log(`Инженер выключил ${equip}.`);
  }
  recordingSong() {
    console.log(`Инженер записал трек, предоставил его клиенту.`);
  }
}
