class Logs {
  constructor(state = []) {
    this.state = state;
  }
  update(changes) {
    this.state = changes;
  }
}
export const logs = new Logs();
