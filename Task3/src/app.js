import { firstCustomer, secondCustomer } from "./modules/person/customer.js";
import { bestSound } from "./modules/studio.js";

const instrumentSelect = document.querySelector("#instrumentForm");
const clientSelect = document.querySelector("#invateForm");
const roomSelect = document.querySelector("#roomForm");
const clientList = document.querySelector(".studio-content__clients");
const rooms = document.querySelector(".studio-content__rooms");
const instruments = document.querySelector(".studio-content__instruments");
const buttonsContent = document.querySelector(".content__buttons");

const getClient = () =>
  clientSelect.value === "1" ? firstCustomer : secondCustomer;

const addContent = () => {
  clientList.textContent = "";
  rooms.textContent = "";
  instruments.textContent = "";
  bestSound.customers.forEach((client) => {
    const item = document.createElement("li");
    item.textContent = client;
    clientList.append(item);
  });

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

document.body.addEventListener("click", (event) => {
  if (event.target.id === "invite") bestSound.inviteCustomer(getClient());
  if (event.target.id === "roomRent")
    bestSound.roomRent(roomSelect.value, getClient());
  if (event.target.id === "leftRoom")
    bestSound.leftRoom(roomSelect.value, getClient());
  if (event.target.id === "leftStudio") bestSound.escortCustomer(getClient());
  if (event.target.id === "equipRent")
    bestSound.equipRent(instrumentSelect.value, getClient());
  if (event.target.id === "returnEquip")
    bestSound.returnEquip(instrumentSelect.value, getClient());
  if (event.target.id === "checkInstrument")
    bestSound.checkInstrument(instrumentSelect.value);
  if (event.target.id === "recordingSong")
    bestSound.songRecording(getClient(), roomSelect.value);
  addContent();
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
