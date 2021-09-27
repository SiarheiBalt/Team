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
  getCash(cost) {
    if (this.cash - cost < 0) {
      return "Недостаточно средств";
    } else {
      this.cash -= cost;
      return this.cash;
    }
  }
}
export class StudioWorker extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
}
