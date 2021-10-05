import { logRecord } from "./../interface.js";

export default class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.logRecord = logRecord;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
