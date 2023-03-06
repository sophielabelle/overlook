class Hotel {
  constructor(bookings, customers, rooms) {
    this.allBookings = bookings;
    this.allCustomers = customers;
    this.allRooms = rooms;
    this.openRooms;
    this.bookedRoomsOnDate;
    this.newBookings;
    this.currCustomer;
  }

  retrieveOpenRoomData(date) {
    this.bookedRoomsOnDate = this.allBookings.filter(booking => booking.date === date).map(b => b.roomNumber);
    this.openRooms = this.allRooms.filter(room => !this.bookedRoomsOnDate.includes(room.number));
  }
  
  getCustomer(id) {
    this.currCustomer = this.allCustomers.find(customer => customer.id === id);
    return this.currCustomer;
  }

  retrieveCustomerBookings(customer) {
    const findBookings = this.allBookings.filter(booking => booking.userID === customer.id).reduce((acc, cur) => {
      this.allRooms.forEach(room => {
        if(room.number === cur.roomNumber) {
          acc.push({roomNum: room, date: cur.date});
        }
      });
      return acc;
    }, []);
    return findBookings;
  }

  getTotalSpent(arr) {
    const cost = arr.reduce((acc, cur) => {
      acc += cur.cost;
      return acc;
    }, 0);
    return cost.toFixed(2);
  }

  filterRoomType(type) {
    const filteredRooms = this.openRooms.filter(room => room.type === type);
    return filteredRooms;
  }

  bookNewRoom(id, date, num) {
    const postingObj = { "userID": id,
    "date": date,
    "roomNumber": num
    }
    return postingObj;
  }
}

export default Hotel;