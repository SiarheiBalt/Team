import { logRecord } from "./../interface.js";

export class MusicalEquip {
  constructor(color, years, manufacture) {
    this.color = color;
    this.productionYears = years;
    this.manufacture = manufacture;
    this.isFree = true;
    this.customer = null;
    this.logRecord = logRecord;
  }
}
