import { StudioWorker } from "./studioWorker.js";

class SoundEngineer extends StudioWorker {
  checkInstrument(instrument) {
    console.log(`Инженер проверяет инструмент ${instrument}`);
  }
  tuningInstruments(instrument) {
    console.log(`Инженер настраивает инструмент ${instrument}`);
  }
  turnOnEquip(equip) {
    console.log(`Инженер включил ${equip}.`);
  }
  turnOfEquip(equip) {
    console.log(`Инженер выключил ${equip}.`);
  }
  recordingSong() {
    console.log(`Инженер записал трек, предоставил его клиенту.`);
  }
}

export const engineer = new SoundEngineer("Денис", "Петров", "Инженер");
