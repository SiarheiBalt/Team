import { Person } from "./person.js";

export class StudioWorker extends Person {
  constructor(firstName, lastName, speciality) {
    super(firstName, lastName);
    this.speciality = speciality;
  }

  work() {
    console.log(`Работник студии начинает работать.`);
  }
}
