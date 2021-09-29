import { Customer } from "./modules/person.js";
import { RecordingStudio } from "./modules/studio.js";

const bestSound = new RecordingStudio("Best Sound");

const customer = new Customer("Григорий", "Хомич", 100);
const customer1 = new Customer("Алексей", "Петрович", 120);

// Пригласить клиента на студию
bestSound.inviteCustomer(customer);
// bestSound.inviteCustomer(customer1);

// Аренда инструмента
// bestSound.rentEquip("guitar", customer);
// Возврат инструмента
// bestSound.returnEquip("guitar");

// Услуга аренда комнаты для репетиции
bestSound.roomRent("small", customer);

// Освободить комнату после аренды
// bestSound.leftRoom("small");

// Проводить клиента из студии
// bestSound.escortCustomer(customer);

// Проверка инструмента
// bestSound.checkInstrument("guitar");

bestSound.songRecording(customer, "big");
