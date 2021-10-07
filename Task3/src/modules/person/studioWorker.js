import Person from "./person.js";

export default class StudioWorker extends Person {
  work() {
    this.logRecord.addLog(`Работник студии начинает работать.`);
  }
}
