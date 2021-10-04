import { logs } from './logs.js';

class Interface {
  constructor() {
    this.logs = [];
    this.subscribers = [];
  }
  addLog(element) {
    this.logs.push(element);
  }
  cleanLogs() {
    this.logs = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((obs) => obs !== subscriber);
  }
  fire() {
    this.subscribers.forEach((subscriber) => {
      subscriber.update(this.logs);
    });
  }
}

export const logRecord = new Interface();

logRecord.subscribe(logs); //Добавляю подписчика
