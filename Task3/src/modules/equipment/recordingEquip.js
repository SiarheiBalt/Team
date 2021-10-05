import MusicalEquip from "./musicalEquip.js";

export default class RecordingEquip extends MusicalEquip {
  constructor(color, years, manufacture) {
    super(color, years, manufacture);
    this.isOn = this.turnOf();
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
