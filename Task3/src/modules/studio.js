import { Drums, Guitar } from './equipment.js';
import { Administrator, Worker, SoundEngineer } from './person.js';

export class RecordingStudio {
  constructor(name) {
    this.name = name;
    this.salary = 0;
    this.rooms = {
      big: new Room('white', 25),
      small: new Room('black', 20),
    };
    this.employees = {
      engineer: new SoundEngineer('Денис', 'Петров'),
      administrator: new Administrator('Елена', 'Денисова'),
      worker: new Worker('Костя', 'Рыбик'),
    };
    this.customers = [];
    this.equip = {
      guitar: new Guitar('black', 2000, 'Japan', 6, 15),
      drums: new Drums('White', 2013, 'China', 5, 30),
    };
  }
  inviteCustomer(customer) {
    console.log(`Клиент ${customer.getFullName()} приглашен на студию.`);
    this.customers = [...this.customers, customer.getFullName()];
  }
  leftStudio(customer) {
    this.customers = this.customers.reduce((acc, client) => {
      if (customer.getFullName() !== client) acc.push(client);
      return acc;
    }, []);
  }

  rentEquip(instrument, customer) {
    console.log(`Клиент хочет арендовать инструмент ${instrument}`);

    if (this.equip[instrument].isFree) {
      this.equip[instrument].reserveInstruments(
        customer.getFullName.call(customer)
      );
      customer.takeCash(this.equip[instrument].rentPrice);
      this.employees.administrator.rentEquip(instrument);
      this.addSalary(this.equip[instrument].rentPrice);
      console.log(
        `Инструмент ${instrument} в распоряжении клиента в течении 2х часов.`
      );
    } else {
      console.log();
      console.log(
        `Инструмент ${instrument} в аренде у пользователя - ${this.equip[instrument].customer} `
      );
    }
  }
  returnEquip(instrument) {
    this.equip[instrument].returnInstrument(instrument);
  }

  roomRent(room, customer) {
    if (this.rooms[room].isFree) {
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
    console.log('Комната свободна');
    this.customer = null;
  }
}
