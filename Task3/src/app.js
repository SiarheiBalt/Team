import { Customer } from "./modules/person.js";
import { RecordingStudio } from "./modules/studio.js";

const bestSound = new RecordingStudio("Best Sound");

const customer = new Customer("Григорий", "Хомич", 100);
const customer1 = new Customer("Алексей", "Петрович", 120);

// Пригласить клиента на студию
// bestSound.inviteCustomer(customer);

// Услуга аренда комнаты для репетиции
// bestSound.roomRent("big");

// bestSound.roomRent("big");

// Проводить клиента
// bestSound.escortClient("big");

bestSound.inviteCustomer(customer1);

bestSound.equipRent("guitar");
bestSound.roomRent("big");

// console.log(bestSound.checkCustomers());
