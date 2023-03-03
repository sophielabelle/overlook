class Customer {
  constructor(custInfo, hotel) {
    this.id = custInfo.id;
    this.name =  custInfo.name;
    this.hotel = hotel;
    this.bookedRooms = [];
    this.totalSpent = 0;
  }
}
export default Customer;