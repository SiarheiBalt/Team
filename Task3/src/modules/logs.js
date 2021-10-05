export default class Logs {
  constructor(state = []) {
    this.state = state;
  }
  update(changes) {
    this.state = changes;
  }
}
