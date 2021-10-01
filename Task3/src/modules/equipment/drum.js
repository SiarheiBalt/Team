import { MusicalInstrument } from "./musicalInstrument.js";

class Drums extends MusicalInstrument {
  constructor(color, years, manufacture, rentPrice, name, numberOfDrums) {
    super(color, years, manufacture, rentPrice, name);
    this.numberOfDrums = numberOfDrums;
  }
}

export const drums = new Drums("White", 2013, "China", 30, "барабаны", 5);
