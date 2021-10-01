import { StudioWorker } from "./studioWorker.js";

class Administrator extends StudioWorker {
  roomRent() {
    console.log(
      `${
        this.speciality
      } ${this.getFullName()} предоставил(а) в аренду комнату для репетиции.`
    );
  }
  equipRent(equip) {
    console.log(`${this.speciality} выдал ${equip} клиенту.`);
  }
}

export const administrator = new Administrator(
  "Елена",
  "Денисова",
  "Администратор"
);
