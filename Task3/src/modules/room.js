import { logRecord } from "./interface.js";

class Room {
  constructor(size, roomRentPrice) {
    this.roomRentPrice = roomRentPrice;
    this.size = size;
    this.isFree = true;
    this.customer = null;
    this.logRecord = logRecord;
  }
  reserveRoom(customer) {
    this.isFree = false;
    this.logRecord.addLog(`Комната зарезервирована клиентом ${customer}`);
    this.customer = customer;
  }
  vacateRoom() {
    this.isFree = true;
    this.logRecord.addLog("Комната свободна");
    this.customer = null;
  }
}

export const bigRoom = new Room("big", 25);
export const smallRoom = new Room("small", 20);
