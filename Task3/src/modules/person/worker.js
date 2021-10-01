import { StudioWorker } from "./studioWorker.js";

class Worker extends StudioWorker {
  roomCleaning() {
    this.logRecord.addLog(
      `${this.speciality} ${this.getFullName()} убрал в комнате.`
    );
  }
}

export const worker = new Worker("Костя", "Рыбик", "Рабочий студии");
