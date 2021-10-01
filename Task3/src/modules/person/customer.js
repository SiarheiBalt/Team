import { Person } from "./person.js";

class Customer extends Person {
  constructor(firstName, lastName, cash) {
    super(firstName, lastName);
    this.cash = cash;
  }
  takeCash(cost) {
    if (this.cash - cost < 0) {
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

export const firstCustomer = new Customer("Григорий", "Хомич", 100);
export const secondCustomer = new Customer("Денис", "Иванов", 50);
