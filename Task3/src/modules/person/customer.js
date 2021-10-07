import Person from "./person.js";

export default class Customer extends Person {
  constructor(firstName, lastName, cash) {
    super(firstName, lastName);
    this.cash = cash;
  }
  takeCash(cost) {
    const cashBalance = this.cash - cost;
    if (cashBalance < 0) {
      this.logRecord.addLog("Недостаточно средств");
      return false;
    } else {
      this.cash -= cost;
      this.logRecord.addLog(
        `Клиент ${this.getFullName()} оплатил услугу в размере ${cost}р.`
      );
      return true;
    }
  }
  getCash() {
    return this.cash;
  }
}
