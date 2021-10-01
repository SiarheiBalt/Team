import { StudioWorker } from "./studioWorker.js";

class Worker extends StudioWorker {
  roomCleaning() {
    console.log(`${this.speciality} ${this.getFullName()} убрал в комнате.`);
  }
}

export const worker = new Worker("Костя", "Рыбик", "Рабочий студии");
