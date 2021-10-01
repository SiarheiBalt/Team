import { MusicalInstrument } from "./musicalInstrument.js";

class Guitar extends MusicalInstrument {
  constructor(color, years, manufacture, rentPrice, name, numberOfStrings) {
    super(color, years, manufacture, rentPrice, name);
    this.numberOfStrings = numberOfStrings;
  }
}

export const guitar = new Guitar("black", 2000, "Japan", 15, "гитара", 6);
