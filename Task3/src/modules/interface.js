class Interface {
  constructor() {
    this.logs = [];
  }
  addLog(element) {
    this.logs.push(element);
  }
  cleanLogs() {
    this.logs = [];
  }
}

export const logRecord = new Interface();
