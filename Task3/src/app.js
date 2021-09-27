import { Customer } from "./person";

class RecordingStudio {
  constructor(name) {
    this.name = name;
  }
}

let customer = new Customer("Den", "Petrov", 100);
console.log(customer);
