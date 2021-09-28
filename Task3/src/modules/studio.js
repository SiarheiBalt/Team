export class RecordingStudio {
  constructor(name) {
    this.name = name;
    this.roomRentPrice = 25;
    this.salary = 0;
  }
  services(type) {
    switch (type) {
      case "room rent":
        console.log("Студия в распоряжении клиента в течении 2часов.");
      default:
        return "Нет таких услуг";
    }
  }
  addSalary(cash) {
    this.salary += cash;
    console.log(`Студия заработала ${cash} р.`);
  }
}
