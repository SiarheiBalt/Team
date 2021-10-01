import { MusicalEquip } from "./musicalEquip.js";

export class RecordingEquip extends MusicalEquip {
  constructor(color, years, manufacture, name) {
    super(color, years, manufacture);
    this.isOn = false;
    this.name = name;
  }
  turnOn() {
    this.isOn = true;
    console.log(`${this.name} включен.`);
  }
  turnOf() {
    this.isOn = false;
    console.log(`${this.name} выключен.`);
  }
}
