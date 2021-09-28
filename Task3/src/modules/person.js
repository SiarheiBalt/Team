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
  isStudioWorker = true;
}
export class Worker extends StudioWorker {
  speciality = "Рабочий студии";
  roomCleaning() {
    console.log(`${this.speciality} ${this.getFullName()} убрал в комнате.`);
  }
}
export class Administrator extends StudioWorker {
  speciality = "Администратор";
  roomRent() {
    console.log(
      `${
        this.speciality
      } ${this.getFullName()} предоставил(а) в аренду комнату для репетиции.`
    );
  }
}
export class SoundEngineer extends StudioWorker {
  speciality = "Инженер";
  guitarTuning() {}
}
