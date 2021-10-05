import StudioWorker from "./studioWorker.js";

export default class Worker extends StudioWorker {
  speciality = "Рабочий студии";
  roomCleaning() {
    this.logRecord.addLog(
      `${this.speciality} ${this.getFullName()} убрал в комнате.`
    );
  }
}
