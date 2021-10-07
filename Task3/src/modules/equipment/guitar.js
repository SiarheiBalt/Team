import MusicalInstrument from "./musicalInstrument.js";

export default class Guitar extends MusicalInstrument {
  constructor(color, years, manufacture, rentPrice, numberOfStrings) {
    super(color, years, manufacture, rentPrice);
    this.numberOfStrings = numberOfStrings;
    this.name = "гитара";
    this.type = "guitar";
  }
}
