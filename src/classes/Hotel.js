class Hotel {
  constructor(bookings, customers, rooms) {
    this.allBookings = bookings;
    this.allCustomers = customers;
    this.allRooms = rooms;
    this.openRooms;
    this.newBookings;
  }

  retrieveCustomerBookings(customer) {
    const findBookings = this.allBookings.filter(booking => booking.userID === customer.id);
    return findBookings;
  }

  retiveRoomData() {
    const findRoom = this.allRooms.map(room => room.number === room.number);
    return findRoom;
    // should be able to have an if statement that looks through all rooms and compares it to all the bookings
    // if a room is not associated with a booking then it is pushed into the open array
  }

  bookNewRoom() {
    // should be able to use the open room array and book a room from their with a user and room data and add it to 
    // add this new room and post request with this new room to the bookings array
  }

  getTotalSpent(roomData) {
    this.totalSpent = this.allRooms.reduce((acc, cur) => {
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