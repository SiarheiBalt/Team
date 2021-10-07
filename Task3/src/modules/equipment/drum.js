import MusicalInstrument from "./musicalInstrument.js";

export default class Drums extends MusicalInstrument {
  constructor(color, years, manufacture, rentPrice, numberOfDrums) {
    super(color, years, manufacture, rentPrice);
    this.numberOfDrums = numberOfDrums;
    this.name = "барабаны";
    this.type = "drums";
  }
}
