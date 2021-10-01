import { StudioWorker } from "./studioWorker.js";

class SoundEngineer extends StudioWorker {
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
  recordingSong() {
    this.logRecord.addLog(`Инженер записал трек, предоставил его клиенту.`);
  }
}

export const engineer = new SoundEngineer("Денис", "Петров", "Инженер");
