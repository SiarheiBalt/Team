import { Customer, Administrator, Worker } from "./modules/person.js";
import { RecordingStudio } from "./modules/studio.js";

const customer1 = new Customer("Денис", "Петров", 100);
const studioAdministrator = new Administrator("Сергей", "Иванов");
const studioWorker = new Worker("Сергей", " Иванов", "Рабочий студии");
const bestSound = new RecordingStudio("Best Sound");
bestSound.services("room rent", customer1, studioWorker, studioAdministrator);

const roomRent = () => {
  studioWorker.roomCleaning();
  studioAdministrator.roomRent();
  bestSound.services("room rent");
  customer1.takeCash(bestSound.roomRentPrice);
  bestSound.addSalary(bestSound.roomRentPrice);
};
roomRent();
