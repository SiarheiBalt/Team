import { Amp, Computer, Drums, Guitar } from "./equipment.js";
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
      engineer: new SoundEngineer("Денис", "Петров", "Инженер"),
      administrator: new Administrator("Елена", "Денисова", "Администратор"),
      worker: new Worker("Костя", "Рыбик", "Рабочий студии"),
    };
    this.customers = [];
    this.equip = {
      guitar: new Guitar("black", 2000, "Japan", 15, "guitar", 6),
      drums: new Drums("White", 2013, "China", 30, "drums", 5),
      computer: new Computer("white", "Integrall", 2019, "компьютер"),
      amp: new Amp("black", "Marshall", 1995, "усилитель"),
    };
    this.recordingPrice = 50;
  }
  inviteCustomer(customer) {
    console.log(`Клиент ${customer.getFullName()} приглашен на студию.`);
    this.customers = [...this.customers, customer.getFullName()];
  }
  escortCustomer(customer) {
    console.log(`Клиент ${customer.getFullName()} покидает студию.`);
    this.customers = this.customers.reduce((acc, client) => {
      if (customer.getFullName() !== client) acc.push(client);
      return acc;
    }, []);
  }
  equipRent(instrument, customer) {
    console.log(`Клиент хочет арендовать инструмент ${instrument}`);
    this.employees.administrator.work();
    if (this.equip[instrument].isFree) {
      this.equip[instrument].reserveInstruments(
        customer.getFullName.call(customer)
      );
      customer.takeCash(this.equip[instrument].rentPrice);
      this.employees.administrator.equipRent(instrument);
      this.addSalary(this.equip[instrument].rentPrice);
      console.log(
        `Инструмент ${instrument} в распоряжении клиента в течении 2х часов.`
      );
      this.equip[instrument].play();
    } else {
      console.log(
        `Инструмент ${instrument} в аренде у пользователя - ${this.equip[instrument].customer} `
      );
    }
  }
  returnEquip(instrument) {
    this.equip[instrument].returnInstrument(instrument);
  }
  checkInstrument(instrument) {
    this.employees.engineer.checkInstrument(instrument);
    if (this.equip[instrument].checkTune()) {
      this.employees.engineer.tuningInstruments(instrument);
      this.equip[instrument].tunning();
    }
  }
  roomRent(room, customer) {
    if (this.rooms[room].isFree) {
      this.employees.administrator.work();
      this.employees.administrator.roomRent();
      this.rooms[room].reserveRoom(customer.getFullName.call(customer));
      customer.takeCash.call(customer, this.rooms[room].roomRentPrice);
      this.addSalary(this.rooms[room].roomRentPrice);
      console.log(`Комната в распоряжении клиента в течении 2х часов`);
    } else {
      console.log(
        `Комната ${this.rooms[room].color} занята клиентом ${this.rooms[room].customer}, смотрите свободна ли другая комната`
      );
    }
  }
  checkCustomers() {
    return this.customer;
  }
  addSalary(cash) {
    this.salary += cash;
    console.log(`Студия положила в копилку ${cash}р.`);
  }
  leftRoom(room) {
    if (this.rooms[room].isFree) {
      console.log(`Комната и так свободна.`);
    } else {
      console.log(`Клиент покинул комнату.`);
      this.employees.worker.roomCleaning();
      this.rooms[room].vacateRoom();
    }
  }
  songRecording(customer, room) {
    console.log(`Клиент ${customer.getFullName()} хочет записать трек.`);
    customer.takeCash.call(customer, this.recordingPrice);
    this.addSalary(this.recordingPrice);
    this.employees.engineer.work();
    this.employees.engineer.turnOnEquip(this.equip.computer.name);
    this.equip.computer.turnOn();
    this.employees.engineer.turnOnEquip(this.equip.amp.name);
    this.equip.amp.turnOn();
    this.employees.engineer.recordingSong();
    this.employees.engineer.turnOfEquip(this.equip.computer.name);
    this.equip.computer.turnOf();
    this.employees.engineer.turnOfEquip(this.equip.amp.name);
    this.equip.amp.turnOf();
  }
}

export class Room {
  constructor(color, roomRentPrice) {
    this.roomRentPrice = roomRentPrice;
    this.color = color;
    this.isFree = true;
    this.customer = null;
  }
  reserveRoom(customer) {
    this.isFree = false;
    console.log(`Комната зарезервирована клиентом ${customer}`);
    this.customer = customer;
  }
  vacateRoom() {
    this.isFree = true;
    console.log("Комната свободна");
    this.customer = null;
  }
}
