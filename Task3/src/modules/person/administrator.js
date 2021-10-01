import { StudioWorker } from "./studioWorker.js";

class Administrator extends StudioWorker {
  roomRent() {
    this.logRecord.addLog(
      `${
        this.speciality
      } ${this.getFullName()} предоставил(а) в аренду комнату для репетиции.`
    );
  }
  equipRent(equip) {
    this.logRecord.addLog(`${this.speciality} выдал ${equip} клиенту.`);
  }
}

export const administrator = new Administrator(
  "Елена",
  "Денисова",
  "Администратор"
);
