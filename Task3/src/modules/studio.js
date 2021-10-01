import { guitar } from "./equipment/guitar.js";
import { drums } from "./equipment/drum.js";

import { computer } from "./equipment/computer.js";
import { amp } from "./equipment/amp.js";

import { engineer } from "./person/soundEngineer.js";
import { worker } from "./person/worker.js";

import { bigRoom, smallRoom } from "./room.js";
import { administrator } from "./person/administrator.js";

import { logRecord } from "./interface.js";

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
  escortCustomer(customer) {
    if (this.checkCustomers()) return;
    this.logRecord.addLog(`Клиент ${customer.getFullName()} покидает студию.`);
    // Удаляю приглашенного пльзователя из массива
    this.customers = this.customers.reduce((acc, client) => {
      if (customer.getFullName() !== client) acc.push(client);
      return acc;
    }, []);
  }
  equipRent(instrument, customer) {
    if (this.checkCustomers()) return;
    this.logRecord.addLog(`Клиент хочет арендовать инструмент ${instrument}`);
    this.employees.administrator.work();
    if (this.equip[instrument].isFree) {
      this.equip[instrument].reserveInstruments(customer.getFullName(customer));
      customer.takeCash(this.equip[instrument].rentPrice);
      this.employees.administrator.equipRent(instrument);
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
      this.employees.administrator.work();
      this.employees.administrator.roomRent();
      this.rooms[room].reserveRoom(customer.getFullName.call(customer));
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
