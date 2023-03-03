import './css/styles.css';
import { promises } from './apiCalls';
import { postData } from './apiCalls';

let customerData, roomData, bookingData, hotel
const resolvePromises = () => {
  promises();
  customerData = data[0];
  roomData = vals[1];
  bookingData = vals[2];
}
// function resolvePromises() {
  //   fetchPromises()
  //   allCustomers = data[0].map((customer) => new Customer(customer))
  //   allRooms = data[1].map((rooms) => new Rooms(rooms))
  //   allBookings = data[2].map((Bookings) => new Bookings(bookings))
  // }