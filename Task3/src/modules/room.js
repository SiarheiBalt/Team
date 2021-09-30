class Room {
  constructor(size, roomRentPrice) {
    this.roomRentPrice = roomRentPrice;
    this.size = size;
    this.isFree = true;
    this.customer = null;
  }
  reserveRoom(customer) {
    this.isFree = false;
    console.log(`Комната зарезервирована клиентом ${customer}`);
    this.customer = customer;
  }
  vacateRoom() {
    this.isFree = true;
    console.log('Комната свободна');
    this.customer = null;
  }
}

export const bigRoom = new Room('big', 25);
export const smallRoom = new Room('small', 20);
