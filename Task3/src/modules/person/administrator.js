import StudioWorker from "./studioWorker.js";

export default class Administrator extends StudioWorker {
  speciality = "Администратор";
  roomRent(room, customer) {
    this.work();
    this.logRecord.addLog(
      `${
        this.speciality
      } ${this.getFullName()} предоставил(а) в аренду комнату для репетиции.`
    );
    room.reserveRoom(customer.getFullName());
  }
  equipRent(equip, customer) {
    equip.reserveInstruments(customer);
    this.logRecord.addLog(`${this.speciality} выдал инструмент клиенту.`);
  }
}
