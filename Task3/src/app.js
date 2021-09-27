import { Customer, StudioWorker } from './modules/person.js';

class RecordingStudio {
  constructor(name) {
    this.name = name;
    this.roomRentPrice = 25;
    this.salary = 0;
  }
  services(type, customer, worker, administrator) {
    switch (type) {
      case 'room rent':
        worker.roomCleaning();
        administrator.roomRent();
        if (customer.takeCash(this.roomRentPrice)) {
          this.addSalary(this.roomRentPrice);
        }
      default:
        return 'Нет таких услуг';
    }
  }
  addSalary(cash) {
    this.salary += cash;
    console.log(`Студия заработала ${cash} р.`);
  }
}

const customer1 = new Customer('Денис', 'Петров', 100);
const studioAdministrator = new StudioWorker(
  'Сергей',
  'Иванов',
  'Администратор'
);
const studioWorker = new StudioWorker('Сергей', ' Иванов', 'Рабочий студии');

const bestSound = new RecordingStudio('Best Sound');
bestSound.services('room rent', customer1, studioWorker, studioAdministrator);
