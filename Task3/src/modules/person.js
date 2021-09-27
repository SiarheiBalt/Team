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
      console.log('Недостаточно средств');
      return false;
    } else {
      this.cash -= cost;
      console.log(`${this.getFullName()} оплатил услугу.`);
      return true;
    }
  }
}
export class StudioWorker extends Person {
  constructor(firstName, lastName, speciality) {
    super(firstName, lastName);
    this.speciality = speciality;
  }
  roomCleaning() {
    console.log(`${this.speciality} убрал в комнате.`);
  }
  roomRent() {
    console.log(
      `${this.speciality} предоставил в аренду комнату для репетиции.`
    );
  }
}
