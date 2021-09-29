import { customer } from './modules/person.js';
import { bestSound } from './modules/studio.js';

document.querySelector('#invite').addEventListener('click', () => {
  // Пригласить клиента на студию
  bestSound.inviteCustomer(customer);
});

document.querySelector('#roomRent').addEventListener('click', () => {
  // Услуга аренда комнаты для репетиции
  bestSound.roomRent('small', customer);
});

// Аренда инструмента
// bestSound.equipRent('guitar', customer);

// Возврат инструмента
// bestSound.returnEquip('guitar');

// Освободить комнату после аренды
// bestSound.leftRoom('small');

// Проводить клиента из студии
// bestSound.escortCustomer(customer);

// Проверка инструмента
// bestSound.checkInstrument('guitar');

// Запись трека
// bestSound.songRecording(customer, 'big');
