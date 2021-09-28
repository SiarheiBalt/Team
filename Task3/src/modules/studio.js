import { Drums, Guitar } from "./equipment.js";
import { Administrator, Worker, SoundEngineer } from "./person.js";

export class RecordingStudio {
  constructor(name) {
    this.name = name;
    this.salary = 0;
    this.rooms = {
      big: new Room("white", 25),
      small: new Room("black", 20),
    };
    this.employees = {
      engineer: new SoundEngineer("Денис", "Петров"),
      administrator: new Administrator("Елена", "Денисова"),
      worker: new Worker("Костя", "Рыбик"),
    };
    this.customer = null;
    this.equip = {
      guitar: new Guitar("black", 2000, "Japan", 6, 15),
      drums: new Drums("White", 2013, "China", 5, 30),
    };
  }
  inviteCustomer(customer) {
    this.customer = customer;
    console.log(`Клиент ${this.customer.getFullName()} приглашен на студию.`);
  }

  equipRent(instrument) {
    if (this.customer === null) {
      console.log("Клиент не пришел!");
    } else {
      console.log(`Клиент хочет арендовать инструмент`);
      this.equip[instrument].reserveInstruments(this.customer);
      this.customer.takeCash(this.equip[instrument].rentPrice);
      this.addSalary(this.equip[instrument].rentPrice);
      console.log(
        `Инструмент ${instrument} в распоряжении клиента в течении 2х часов`
      );
    }
  }

  roomRent(room) {
    if (this.rooms[room].isRoomFree()) {
      this.employees.worker.roomCleaning();
      this.employees.administrator.roomRent();
      this.rooms[room].reserveRom(this.customer);
      this.customer.takeCash(this.rooms[room].roomRentPrice);
      this.addSalary(this.rooms[room].roomRentPrice);
      console.log(`Комната в распоряжении клиента в течении 2х часов`);
    }
  }

  checkCustomers() {
    return this.customer;
  }

  addSalary(cash) {
    this.salary += cash;
    console.log(`Студия положила в копилку ${cash}р.`);
  }
  escortClient(room) {
    this.customer = null;
    console.log(`Клиент покинул комнату.`);
    this.rooms[room].vacateRoom();
  }
}

class Room {
  constructor(color, roomRentPrice) {
    this.roomRentPrice = roomRentPrice;
    this.color = color;
    this.isFree = true;
    this.customer = null;
  }
  reserveRom(customer) {
    this.isFree = false;
    console.log("Комната зарезервирована клиентом.");
    this.customer = customer;
  }
  vacateRoom() {
    this.isFree = true;
    console.log("Комната свободна");
    this.customer = null;
  }
  isRoomFree() {
    if (this.isFree) {
      console.log("Проверка занята ли комната. Комната свободна.");
      return true;
    } else {
      console.log(
        "Комната занята, нужно ожидать. Либо смотрите свободна ли другая комната."
      );
      return false;
    }
  }
}
