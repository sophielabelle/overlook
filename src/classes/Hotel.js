class Hotel {
  constructor(bookings, customers, rooms) {
    this.allBookings = bookings;
    this.allCustomers = customers;
    this.allRooms = rooms;
    this.openRooms;
    this.bookedRoomsOnDate;
    this.newBookings;
  }

  retrieveOpenRoomData(date) {
    this.bookedRoomsOnDate = this.allBookings.filter(booking => booking.date === date).map(b => b.roomNumber);
    this.openRooms = this.allRooms.filter(room => !this.bookedRoomsOnDate.includes(room.number));
  }

  bookNewRoom(book) {
  }

  retrieveCustomerBookings(customer) {
    const findBookings = this.allBookings.filter(booking => booking.userID === customer.id).reduce((acc, cur) => {
      this.allRooms.forEach(room => {
        if(room.number === cur.roomNumber) {
          acc.push(room);
        }
      });
      return acc;
    }, []);
    return findBookings;
  }

  getTotalSpent(arr) {
    const cost = arr.reduce((acc, cur) => {
      acc += cur.cost
      return acc
    }, 0);
    return cost.toFixed(2)
  }
}

export default Hotel;