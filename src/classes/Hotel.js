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
    const findBookings = this.allBookings.filter(booking => booking.userID === customer.id);
    return findBookings;
  }

  getTotalSpent(customer) {
    // const 
    this.totalSpent = this.rooms.reduce((acc, cur) => {
      roomData.map(room => {
        if(room.number === cur.roomNumber) {
          acc += room.costPerNight;
        }
      })
      return acc;
    }, 0)
  }
}

export default Hotel;