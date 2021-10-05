import StudioWorker from "./studioWorker.js";

export default class SoundEngineer extends StudioWorker {
  speciality = "Инженер";
  checkInstrument(instrument) {
    this.logRecord.addLog(`Инженер проверяет инструмент ${instrument}`);
  }
  tuningInstruments(instrument) {
    this.logRecord.addLog(`Инженер настраивает инструмент ${instrument}`);
  }
  turnOnEquip(equip) {
    this.logRecord.addLog(`Инженер включил ${equip}.`);
  }
  turnOfEquip(equip) {
    this.logRecord.addLog(`Инженер выключил ${equip}.`);
  }
  recordingSong(computer, amp) {
    this.work();
    this.turnOnEquip(computer.name);
    computer.turnOn();
    this.turnOnEquip(amp.name);
    amp.turnOn();
    this.logRecord.addLog(`Инженер записал трек, предоставил его клиенту.`);
    this.turnOfEquip(computer.name);
    computer.turnOf();
    this.turnOfEquip(amp.name);
    amp.turnOf();
  }
}
