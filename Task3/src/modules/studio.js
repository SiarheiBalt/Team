import Guitar from "./equipment/guitar.js";
import Drums from "./equipment/drum.js";
import Computer from "./equipment/computer.js";
import Amp from "./equipment/amp.js";
import Room from "./room.js";
import SoundEngineer from "./person/soundEngineer.js";
import Worker from "./person/worker.js";
import Administrator from "./person/administrator.js";

import { logRecord } from "./interface.js";

const guitar = new Guitar("black", 2000, "Japan", 15, 6);
const drums = new Drums("White", 2013, "China", 30, 5);
const amp = new Amp("black", "Marshall", 1995);
const computer = new Computer("white", "Integrall", 2019);
const bigRoom = new Room("big", 25);
const smallRoom = new Room("small", 20);
const engineer = new SoundEngineer("Денис", "Петров");
const worker = new Worker("Костя", "Рыбик");
const administrator = new Administrator("Елена", "Денисова");

export class RecordingStudio {
  constructor(
    name,
    engineer,
    administrator,
    worker,
    big,
    small,
    guitar,
    drums,
    computer,
    amp
  ) {
    this.name = name;
    this.salary = 0;
    this.rooms = {
      big,
      small,
    };
    this.employees = {
      engineer,
      administrator,
      worker,
    };
    this.customers = [];
    this.equip = {
      guitar,
      drums,
      computer,
      amp,
    };
    this.recordingPrice = 50;
    this.logRecord = logRecord;
  }
  inviteCustomer(customer) {
    if (this.customers.some((client) => client === customer.getFullName())) {
      this.logRecord.addLog(
        `Клиент ${customer.getFullName()} уже находится на студии.`
      );
    } else {
      // Записываю приглашенного пользователя в массив
      this.customers = [...this.customers, customer.getFullName()];
      this.logRecord.addLog(
        `Клиент ${customer.getFullName()} приглашен на студию.`
      );
    }
  }
  removeCustomer(customer) {
    if (this.checkCustomers()) return;
    this.logRecord.addLog(`Клиент ${customer.getFullName()} покидает студию.`);
    // Удаляю приглашенного пльзователя из массива
    this.customers = this.customers.filter(
      (element) => customer.getFullName() !== element
    );
  }
  equipRent(instrument, customer) {
    if (this.checkCustomers()) return;
    this.logRecord.addLog(`Клиент хочет арендовать инструмент ${instrument}`);
    this.employees.administrator.work();
    if (this.equip[instrument].isFree) {
      customer.takeCash(this.equip[instrument].rentPrice);
      this.employees.administrator.equipRent(
        this.equip[instrument],
        customer.getFullName(customer)
      ); //
      this.addSalary(this.equip[instrument].rentPrice);
      this.logRecord.addLog(
        `Инструмент ${instrument} в распоряжении клиента в течении 2х часов.`
      );
      this.equip[instrument].play();
    } else {
      this.logRecord.addLog(
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
    if (this.checkCustomers()) return;
    if (this.rooms[room].isFree) {
      this.employees.administrator.roomRent(this.rooms[room], customer);
      customer.takeCash(this.rooms[room].roomRentPrice);
      this.addSalary(this.rooms[room].roomRentPrice);
      this.logRecord.addLog(
        `Комната в распоряжении клиента в течении 2х часов`
      );
    } else {
      this.logRecord.addLog(
        `Комната ${this.rooms[room].size} занята клиентом ${this.rooms[room].customer}, смотрите свободна ли другая комната`
      );
    }
  }
  getCustomers() {
    // Получить массив из клиентов находящихся на студии
    return this.customer;
  }
  addSalary(cash) {
    this.salary += cash;
    this.logRecord.addLog(`Студия положила в копилку ${cash}р.`);
  }
  leftRoom(room) {
    if (this.rooms[room].isFree) {
      this.logRecord.addLog(`Комната и так свободна.`);
    } else {
      this.logRecord.addLog(`Клиент покинул комнату.`);
      this.employees.worker.roomCleaning();
      this.rooms[room].vacateRoom();
    }
  }
  songRecording(customer) {
    if (this.checkCustomers()) return;
    // Проверка, арендована ли комната данным пользователем.
    for (const key in this.rooms) {
      if (this.rooms[key].customer === customer.getFullName()) {
        this.logRecord.addLog(
          `Клиент ${customer.getFullName()} хочет записать трек.`
        );
        if (!customer.takeCash(this.recordingPrice)) return;
        this.addSalary(this.recordingPrice);
        this.employees.engineer.recordingSong(
          this.equip.computer,
          this.equip.amp
        );
        return;
      } else {
        this.logRecord.addLog(`Арендуйте комнату для записи.`);
        return;
      }
    }
  }
  checkCustomers() {
    // Проверка есть ли на студии клиенты
    if (this.customers.length === 0) {
      this.logRecord.addLog(`На студии клиентов нет`);
    }
    return this.customers.length === 0;
  }
}
export const bestSound = new RecordingStudio(
  "Best Sound",
  engineer,
  administrator,
  worker,
  bigRoom,
  smallRoom,
  guitar,
  drums,
  computer,
  amp
);
