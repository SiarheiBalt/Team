import { MusicalEquip } from "./musicalEquip.js";

export class RecordingEquip extends MusicalEquip {
  constructor(color, years, manufacture, name) {
    super(color, years, manufacture);
    this.isOn = false;
    this.name = name;
  }
  turnOn() {
    this.isOn = true;
    this.logRecord.addLog(`${this.name} включен.`);
  }
  turnOf() {
    this.isOn = false;
    this.logRecord.addLog(`${this.name} выключен.`);
  }
}
