import Customer from "./modules/person/customer.js";
import { bestSound } from "./modules/studio.js";
import { logRecord, logs } from "./modules/interface.js";

const instrumentSelect = document.querySelector("#instrumentForm");
const clientSelect = document.querySelector("#invateForm");
const roomSelect = document.querySelector("#roomForm");
const clientList = document.querySelector(".studio-content__clients");
const rooms = document.querySelector(".studio-content__rooms");
const instruments = document.querySelector(".studio-content__instruments");
const buttonsContent = document.querySelector(".content__buttons");
const logContent = document.querySelector(".content-info_log");
const studioSalary = document.querySelector(".studio-salary");

const firstCustomer = new Customer("Григорий", "Хомич", 100);
const secondCustomer = new Customer("Денис", "Иванов", 50);

logRecord.cleanLogs();

const getClient = () =>
  clientSelect.value === "1" ? firstCustomer : secondCustomer;

const addLogContent = () => {
  logRecord.fire(); // Уведомляю подписчика об изменении
  logs.state.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    logContent.append(li);
  });
  logRecord.cleanLogs();
};

const cleanLogContent = () => {
  logContent.textContent = "";
};

const addStatus = () => {
  clientList.textContent = "";
  rooms.textContent = "";
  instruments.textContent = "";
  bestSound.customers.forEach((client) => {
    const item = document.createElement("li");
    item.textContent = client;
    clientList.append(item);
  });

  studioSalary.textContent = bestSound.salary;

  for (const key in bestSound.rooms) {
    if (bestSound.rooms[key].customer !== null) {
      const room = document.createElement("li");
      room.textContent = `Комната ${bestSound.rooms[key].size} занята. Клиент - ${bestSound.rooms[key].customer} `;
      rooms.append(room);
    }
  }
  for (const key in bestSound.equip) {
    if (bestSound.equip[key].customer !== null) {
      const equip = document.createElement("li");
      equip.textContent = `Инструмент ${bestSound.equip[key].name} занят(ы).  Клиент - ${bestSound.equip[key].customer}`;
      instruments.append(equip);
    }
  }
};
addStatus();

const actions = {
  invite: () => bestSound.inviteCustomer(getClient()),
  roomRent: () => bestSound.roomRent(roomSelect.value, getClient()),
  leftRoom: () => bestSound.leftRoom(roomSelect.value, getClient()),
  leftStudio: () => bestSound.removeCustomer(getClient()),
  equipRent: () => bestSound.equipRent(instrumentSelect.value, getClient()),
  returnEquip: () => bestSound.returnEquip(instrumentSelect.value, getClient()),
  checkInstrument: () => bestSound.checkInstrument(instrumentSelect.value),
  recordingSong: () => bestSound.songRecording(getClient(), roomSelect.value),
};

buttonsContent.addEventListener("click", (event) => {
  cleanLogContent();
  actions[event.target.id]();
  addStatus();
  addLogContent();
});

const buttonsArray = [
  ["invite", "Пригласить клиента"],
  ["roomRent", "Клиент арендует комнату"],
  ["leftRoom", "Клиент покидает комнату"],
  ["leftStudio", "Клиент покидает студию"],
  ["equipRent", "Аренда оборудования"],
  ["returnEquip", "Вернуть оборудование"],
  ["checkInstrument", "Проверить инструмент"],
  ["recordingSong", "Запись трека"],
];
const buttonsElements = buttonsArray.map((element) => {
  const button = document.createElement("button");
  button.classList.add("button");
  button.setAttribute("id", element[0]);
  button.textContent = element[1];
  return button;
});
buttonsElements.forEach((element) => {
  buttonsContent.append(element);
});
