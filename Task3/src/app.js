import { firstCustomer, secondCustomer } from "./modules/person.js";
import { bestSound } from "./modules/studio.js";

const instrumentSelect = document.querySelector("#instrumentForm");
const clientSelect = document.querySelector("#invateForm");
const roomSelect = document.querySelector("#roomForm");

const studio = document.querySelector(".studio-content");

const getClient = () =>
  clientSelect.value === "1" ? firstCustomer : secondCustomer;

document.body.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "invite":
      // Пригласить клиента на студию
      bestSound.inviteCustomer(getClient());
      return;
    case "roomRent":
      // Услуга аренда комнаты для репетиции
      bestSound.roomRent(roomSelect.value, getClient());

      return;
    case "leftRoom":
      // Клиент покидает комнату
      bestSound.leftRoom(roomSelect.value, getClient());
      return;
    case "leftStudio":
      // Клиент покидает комнату
      bestSound.escortCustomer(getClient());
      return;
    case "equipRent":
      // Взять в аренду оборудование
      bestSound.equipRent(instrumentSelect.value, getClient());
      return;
    case "returnEquip":
      // Вернуть оборудование
      bestSound.returnEquip(instrumentSelect.value, getClient());
      return;
    case "checkInstrument":
      // проверка инструмента
      bestSound.checkInstrument(instrumentSelect.value);
      return;
    case "recordingSong":
      // Запись трека
      bestSound.songRecording(getClient(), roomSelect.value);
      return;
    default:
      break;
  }
});
